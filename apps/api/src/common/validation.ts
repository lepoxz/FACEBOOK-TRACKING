import { HttpStatus } from "@nestjs/common";
import { ApiException, type ApiErrorDetail } from "./api-exception";

export function assertOrThrow(condition: boolean, status: HttpStatus, code: string, message: string) {
  if (!condition) {
    throw new ApiException(status, code, message);
  }
}

export function throwValidation(details: ApiErrorDetail[], message = "Du lieu gui len khong hop le.") {
  throw new ApiException(HttpStatus.UNPROCESSABLE_ENTITY, "VALIDATION_ERROR", message, details);
}

export function readPositiveInteger(value: unknown, field: string, fallback?: number) {
  if (value === undefined || value === null || value === "") {
    if (fallback !== undefined) {
      return fallback;
    }

    throwValidation([{ field, message: "Bat buoc." }]);
  }

  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed <= 0) {
    throwValidation([{ field, message: "Phai la so nguyen duong." }]);
  }

  return parsed;
}

export function readNonNegativeInteger(value: unknown, field: string, fallback?: number) {
  if (value === undefined || value === null || value === "") {
    if (fallback !== undefined) {
      return fallback;
    }

    throwValidation([{ field, message: "Bat buoc." }]);
  }

  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 0) {
    throwValidation([{ field, message: "Phai la so nguyen khong am." }]);
  }

  return parsed;
}

export function readOptionalString(value: unknown) {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value !== "string") {
    return "__invalid_type__";
  }

  const normalized = value.trim();
  return normalized === "" ? null : normalized;
}
