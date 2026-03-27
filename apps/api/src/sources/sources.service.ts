import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { ApiException } from "../common/api-exception";
import { PrismaService } from "../database/prisma.service";
import type { CreateSourceInput, UpdateSourceInput } from "./source-validation";

@Injectable()
export class SourcesService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async list(offset: number, limit: number) {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.source.findMany({
        orderBy: {
          createdAt: "desc"
        },
        skip: offset,
        take: limit
      }),
      this.prisma.source.count()
    ]);

    return {
      items,
      pagination: {
        offset,
        limit,
        total
      }
    };
  }

  async getById(id: number) {
    const source = await this.prisma.source.findUnique({
      where: { id }
    });

    if (!source) {
      throw new ApiException(HttpStatus.NOT_FOUND, "SOURCE_NOT_FOUND", "Khong tim thay source.");
    }

    return source;
  }

  async create(input: CreateSourceInput) {
    try {
      return await this.prisma.source.create({
        data: input
      });
    } catch (error) {
      this.rethrowKnownErrors(error);
      throw error;
    }
  }

  async update(id: number, input: UpdateSourceInput) {
    await this.getById(id);

    try {
      return await this.prisma.source.update({
        where: { id },
        data: input
      });
    } catch (error) {
      this.rethrowKnownErrors(error);
      throw error;
    }
  }

  async remove(id: number) {
    await this.getById(id);
    await this.prisma.source.delete({
      where: { id }
    });

    return {
      ok: true
    };
  }

  private rethrowKnownErrors(error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      throw new ApiException(
        HttpStatus.CONFLICT,
        "SOURCE_SLUG_CONFLICT",
        "Page slug da ton tai.",
        [{ field: "pageSlug", message: "Gia tri bi trung." }]
      );
    }
  }
}
