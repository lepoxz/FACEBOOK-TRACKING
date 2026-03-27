import { HttpStatus } from "@nestjs/common";
import { ApiException } from "../common/api-exception";
import { readOptionalString, throwValidation } from "../common/validation";

export interface CreateSourceInput {
  pageSlug: string;
  pageName: string;
  enabled: boolean;
  realtimeScanEnabled: boolean;
  telegramTarget: string | null;
}

export interface UpdateSourceInput {
  pageSlug?: string;
  pageName?: string;
  enabled?: boolean;
  realtimeScanEnabled?: boolean;
  telegramTarget?: string | null;
}

function normalizeSlug(value: string) {
  return value.trim().toLowerCase();
}

function validateBoolean(value: unknown, field: string) {
  if (typeof value !== "boolean") {
    return { field, message: "Phai la boolean." };
  }

  return null;
}

export function parseCreateSource(body: Record<string, unknown> | null | undefined): CreateSourceInput {
  if (!body || typeof body !== "object") {
    throw new ApiException(HttpStatus.UNPROCESSABLE_ENTITY, "VALIDATION_ERROR", "Body khong hop le.");
  }

  const details = [];

  if (typeof body.pageSlug !== "string" || body.pageSlug.trim() === "") {
    details.push({ field: "pageSlug", message: "Bat buoc." });
  }

  if (typeof body.pageName !== "string" || body.pageName.trim() === "") {
    details.push({ field: "pageName", message: "Bat buoc." });
  }

  const enabledError = validateBoolean(body.enabled, "enabled");
  if (enabledError) {
    details.push(enabledError);
  }

  const realtimeError = validateBoolean(body.realtimeScanEnabled, "realtimeScanEnabled");
  if (realtimeError) {
    details.push(realtimeError);
  }

  const telegramTarget = readOptionalString(body.telegramTarget);
  if (telegramTarget === "__invalid_type__") {
    details.push({ field: "telegramTarget", message: "Phai la chuoi hoac null." });
  }

  if (details.length > 0) {
    throwValidation(details);
  }

  return {
    pageSlug: normalizeSlug(body.pageSlug as string),
    pageName: (body.pageName as string).trim(),
    enabled: body.enabled as boolean,
    realtimeScanEnabled: body.realtimeScanEnabled as boolean,
    telegramTarget: telegramTarget as string | null
  };
}

export function parseUpdateSource(body: Record<string, unknown> | null | undefined): UpdateSourceInput {
  if (!body || typeof body !== "object") {
    throw new ApiException(HttpStatus.UNPROCESSABLE_ENTITY, "VALIDATION_ERROR", "Body khong hop le.");
  }

  const details = [];
  const result: UpdateSourceInput = {};

  if ("pageSlug" in body) {
    if (typeof body.pageSlug !== "string" || body.pageSlug.trim() === "") {
      details.push({ field: "pageSlug", message: "Khong duoc de trong." });
    } else {
      result.pageSlug = normalizeSlug(body.pageSlug);
    }
  }

  if ("pageName" in body) {
    if (typeof body.pageName !== "string" || body.pageName.trim() === "") {
      details.push({ field: "pageName", message: "Khong duoc de trong." });
    } else {
      result.pageName = body.pageName.trim();
    }
  }

  if ("enabled" in body) {
    const enabledError = validateBoolean(body.enabled, "enabled");
    if (enabledError) {
      details.push(enabledError);
    } else {
      result.enabled = body.enabled as boolean;
    }
  }

  if ("realtimeScanEnabled" in body) {
    const realtimeError = validateBoolean(body.realtimeScanEnabled, "realtimeScanEnabled");
    if (realtimeError) {
      details.push(realtimeError);
    } else {
      result.realtimeScanEnabled = body.realtimeScanEnabled as boolean;
    }
  }

  if ("telegramTarget" in body) {
    const telegramTarget = readOptionalString(body.telegramTarget);
    if (telegramTarget === "__invalid_type__") {
      details.push({ field: "telegramTarget", message: "Phai la chuoi hoac null." });
    } else {
      result.telegramTarget = telegramTarget as string | null;
    }
  }

  if (Object.keys(result).length === 0 && details.length === 0) {
    details.push({ field: "body", message: "Can it nhat 1 truong de cap nhat." });
  }

  if (details.length > 0) {
    throwValidation(details);
  }

  return result;
}
