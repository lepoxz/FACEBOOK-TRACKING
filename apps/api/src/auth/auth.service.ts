import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { compare } from "bcryptjs";
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import { ApiException } from "../common/api-exception";
import { APP_CONFIG, type AppConfig } from "../config/app-config.provider";

export interface AdminJwtPayload {
  sub: string;
  role: "admin";
}

@Injectable()
export class AuthService {
  constructor(@Inject(APP_CONFIG) private readonly config: AppConfig) {}

  async login(username: string, password: string) {
    if (!this.config.adminUsername || !this.config.adminPasswordHash || !this.config.jwtSecret) {
      throw new ApiException(
        HttpStatus.UNPROCESSABLE_ENTITY,
        "AUTH_CONFIG_MISSING",
        "Chua cau hinh du ADMIN_USERNAME, ADMIN_PASSWORD_HASH hoac JWT_SECRET."
      );
    }

    const usernameMatches = username.trim() === this.config.adminUsername;
    const passwordMatches = await compare(password, this.config.adminPasswordHash);

    if (!usernameMatches || !passwordMatches) {
      throw new ApiException(
        HttpStatus.UNAUTHORIZED,
        "INVALID_CREDENTIALS",
        "Thong tin dang nhap khong dung."
      );
    }

    const payload: AdminJwtPayload = {
      sub: this.config.adminUsername,
      role: "admin"
    };

    const accessToken = jwt.sign(payload, this.config.jwtSecret, {
      expiresIn: this.config.jwtExpiresIn as SignOptions["expiresIn"]
    });

    return {
      accessToken,
      tokenType: "Bearer",
      expiresIn: this.config.jwtExpiresIn
    };
  }

  verifyAccessToken(token: string) {
    if (!this.config.jwtSecret) {
      throw new ApiException(
        HttpStatus.UNAUTHORIZED,
        "AUTH_CONFIG_MISSING",
        "JWT_SECRET chua duoc cau hinh."
      );
    }

    try {
      return jwt.verify(token, this.config.jwtSecret as Secret) as AdminJwtPayload;
    } catch {
      throw new ApiException(HttpStatus.UNAUTHORIZED, "INVALID_TOKEN", "Access token khong hop le.");
    }
  }
}
