import { Body, Controller, Post } from "@nestjs/common";
import { throwValidation } from "../common/validation";
import { AuthService } from "./auth.service";

interface LoginBody {
  username?: unknown;
  password?: unknown;
}

@Controller("v1/admin/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() body: LoginBody) {
    const details = [];

    if (typeof body?.username !== "string" || body.username.trim() === "") {
      details.push({ field: "username", message: "Bat buoc." });
    }

    if (typeof body?.password !== "string" || body.password.trim() === "") {
      details.push({ field: "password", message: "Bat buoc." });
    }

    if (details.length > 0) {
      throwValidation(details);
    }

    return this.authService.login(body.username as string, body.password as string);
  }
}
