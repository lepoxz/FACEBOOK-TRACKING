import { Injectable } from "@nestjs/common";
import {
  type SourceItem,
  type TrackedPagesResponse
} from "@facebook-tracking/shared-types";
import { PrismaService } from "./database/prisma.service";

@Injectable()
export class TrackedPagesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(): Promise<TrackedPagesResponse> {
    const items = await this.prisma.source.findMany({
      include: {
        jobs: {
          orderBy: {
            createdAt: "desc"
          },
          take: 1
        },
        sheetRegistries: {
          orderBy: {
            createdAt: "desc"
          },
          take: 1
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return {
      items: items.map<SourceItem>((item) => ({
        id: item.id,
        pageSlug: item.pageSlug,
        pageName: item.pageName,
        enabled: item.enabled,
        realtimeScanEnabled: item.realtimeScanEnabled,
        telegramTarget: item.telegramTarget,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
        latestJob: item.jobs[0]
          ? {
              id: item.jobs[0].id,
              type: item.jobs[0].type,
              status: item.jobs[0].status,
              startedAt: item.jobs[0].startedAt?.toISOString() ?? null,
              finishedAt: item.jobs[0].finishedAt?.toISOString() ?? null,
              errorMessage: item.jobs[0].errorMessage
            }
          : null,
        latestSheet: item.sheetRegistries[0]
          ? {
              id: item.sheetRegistries[0].id,
              date: item.sheetRegistries[0].date,
              fileName: item.sheetRegistries[0].fileName,
              googleSheetId: item.sheetRegistries[0].googleSheetId,
              googleSheetUrl: item.sheetRegistries[0].googleSheetUrl
            }
          : null
      })),
      total: items.length
    };
  }

  async count() {
    return this.prisma.source.count();
  }
}
