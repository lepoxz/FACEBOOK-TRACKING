import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ApiException } from "../common/api-exception";
import { HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";

interface AuthenticatedRequest {
  headers: {
    authorization?: string;
  };
  admin?: unknown;
}

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const header = request.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      throw new ApiException(
        HttpStatus.UNAUTHORIZED,
        "MISSING_TOKEN",
        "Can gui Authorization: Bearer <token>."
      );
    }

    const token = header.slice("Bearer ".length).trim();
    const payload = this.authService.verifyAccessToken(token);
    request.admin = payload;
    return true;
  }
}
