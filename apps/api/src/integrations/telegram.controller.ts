import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AdminAuthGuard } from "../auth/admin-auth.guard";
import { throwValidation } from "../common/validation";
import { TelegramService } from "./telegram.service";

interface TelegramTestBody {
  chatId?: unknown;
  message?: unknown;
}

@UseGuards(AdminAuthGuard)
@Controller("v1/integrations/telegram")
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post("test")
  async test(@Body() body: TelegramTestBody) {
    const details = [];

    if (body.chatId !== undefined && body.chatId !== null && typeof body.chatId !== "string") {
      details.push({ field: "chatId", message: "Phai la chuoi." });
    }

    if (body.message !== undefined && body.message !== null && typeof body.message !== "string") {
      details.push({ field: "message", message: "Phai la chuoi." });
    }

    if (details.length > 0) {
      throwValidation(details);
    }

    return this.telegramService.sendTestMessage(
      body.chatId as string | undefined,
      body.message as string | undefined
    );
  }
}
