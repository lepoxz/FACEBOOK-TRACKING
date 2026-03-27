import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { ApiException } from "./api-exception";

interface FilterResponse {
  status(code: number): FilterResponse;
  json(body: unknown): void;
}

@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<FilterResponse>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const payload = exception.getResponse();

      if (
        typeof payload === "object" &&
        payload !== null &&
        "error" in payload &&
        typeof payload.error === "object"
      ) {
        response.status(status).json(payload);
        return;
      }

      response.status(status).json({
        error: {
          code: this.codeFromStatus(status),
          message: typeof payload === "string" ? payload : exception.message,
          details: []
        }
      });
      return;
    }

    const fallback = new ApiException(
      HttpStatus.INTERNAL_SERVER_ERROR,
      "INTERNAL_ERROR",
      "Da xay ra loi noi bo."
    );

    response.status(fallback.getStatus()).json(fallback.getResponse());
  }

  private codeFromStatus(status: number) {
    switch (status) {
      case HttpStatus.BAD_REQUEST:
        return "BAD_REQUEST";
      case HttpStatus.UNAUTHORIZED:
        return "UNAUTHORIZED";
      case HttpStatus.FORBIDDEN:
        return "FORBIDDEN";
      case HttpStatus.NOT_FOUND:
        return "NOT_FOUND";
      case HttpStatus.CONFLICT:
        return "CONFLICT";
      case HttpStatus.UNPROCESSABLE_ENTITY:
        return "VALIDATION_ERROR";
      default:
        return "HTTP_ERROR";
    }
  }
}
