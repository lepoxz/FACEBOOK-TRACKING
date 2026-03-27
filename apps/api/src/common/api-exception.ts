import { HttpException, HttpStatus } from "@nestjs/common";

export interface ApiErrorDetail {
  field?: string;
  message: string;
  code?: string;
}

export interface ApiErrorBody {
  error: {
    code: string;
    message: string;
    details: ApiErrorDetail[];
  };
}

export class ApiException extends HttpException {
  constructor(
    status: HttpStatus,
    code: string,
    message: string,
    details: ApiErrorDetail[] = []
  ) {
    super(
      {
        error: {
          code,
          message,
          details
        }
      } satisfies ApiErrorBody,
      status
    );
  }
}
