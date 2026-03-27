import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { ApiException } from "../common/api-exception";
import { APP_CONFIG, type AppConfig } from "../config/app-config.provider";

interface TelegramSendMessageResponse {
  ok: boolean;
  result?: {
    message_id: number;
  };
  description?: string;
}

@Injectable()
export class TelegramService {
  constructor(@Inject(APP_CONFIG) private readonly config: AppConfig) {}

  async sendTestMessage(chatId?: string, message?: string) {
    if (!this.config.telegramBotToken) {
      throw new ApiException(
        HttpStatus.UNPROCESSABLE_ENTITY,
        "TELEGRAM_CONFIG_MISSING",
        "Chua cau hinh TELEGRAM_BOT_TOKEN."
      );
    }

    const resolvedChatId = chatId?.trim() || this.config.telegramDefaultChatId;

    if (!resolvedChatId) {
      throw new ApiException(
        HttpStatus.UNPROCESSABLE_ENTITY,
        "TELEGRAM_CHAT_ID_MISSING",
        "Can gui chatId hoac cau hinh TELEGRAM_DEFAULT_CHAT_ID."
      );
    }

    const payload = {
      chat_id: resolvedChatId,
      text:
        message?.trim() ||
        `FACEBOOK-TRACKING test message @ ${new Date().toISOString()}`
    };

    const response = await fetch(
      `https://api.telegram.org/bot${this.config.telegramBotToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const data = (await response.json()) as TelegramSendMessageResponse;

    if (!response.ok || !data.ok) {
      throw new ApiException(
        HttpStatus.BAD_GATEWAY,
        "TELEGRAM_SEND_FAILED",
        data.description || "Khong gui duoc tin nhan Telegram."
      );
    }

    return {
      ok: true,
      chatId: resolvedChatId,
      messageId: data.result?.message_id ?? null
    };
  }
}
