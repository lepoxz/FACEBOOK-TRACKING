import { Controller, Get, Inject } from "@nestjs/common";
import { TrackedPagesService } from "./tracked-pages.service";

@Controller("v1/pages")
export class TrackedPagesController {
  constructor(
    @Inject(TrackedPagesService)
    private readonly trackedPagesService: TrackedPagesService
  ) {}

  @Get()
  getTrackedPages() {
    return this.trackedPagesService.list();
  }
}
