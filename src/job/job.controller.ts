import { Body, Controller, Post } from "@nestjs/common";

import { JobService } from "job/job.service";

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post("jobs")
  async createJob(@Body("job") createJobDto: any): Promise<any> {
    return await this.jobService.createJob(createJobDto);
  }
}
