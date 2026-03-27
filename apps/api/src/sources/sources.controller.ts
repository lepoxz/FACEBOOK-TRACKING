import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards
} from "@nestjs/common";
import { readNonNegativeInteger, readPositiveInteger } from "../common/validation";
import { AdminAuthGuard } from "../auth/admin-auth.guard";
import { parseCreateSource, parseUpdateSource } from "./source-validation";
import { SourcesService } from "./sources.service";

@UseGuards(AdminAuthGuard)
@Controller("v1/sources")
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @Get()
  async list(@Query("offset") offsetValue?: string, @Query("limit") limitValue?: string) {
    const offset = offsetValue === undefined ? 0 : readNonNegativeInteger(offsetValue, "offset");
    const limit = limitValue === undefined ? 20 : readPositiveInteger(limitValue, "limit");
    return this.sourcesService.list(offset, Math.min(limit, 100));
  }

  @Get(":id")
  async getById(@Param("id") idValue: string) {
    const id = readPositiveInteger(idValue, "id");
    return this.sourcesService.getById(id);
  }

  @Post()
  async create(@Body() body: Record<string, unknown>) {
    return this.sourcesService.create(parseCreateSource(body));
  }

  @Patch(":id")
  async update(@Param("id") idValue: string, @Body() body: Record<string, unknown>) {
    const id = readPositiveInteger(idValue, "id");
    return this.sourcesService.update(id, parseUpdateSource(body));
  }

  @Delete(":id")
  async remove(@Param("id") idValue: string) {
    const id = readPositiveInteger(idValue, "id");
    return this.sourcesService.remove(id);
  }
}
