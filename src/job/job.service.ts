import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { JobEntity } from 'job/job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRepository: Repository<JobEntity>,
  ) {}

  async createJob(createJobDto: any): Promise<JobEntity> {
    const newJob = new JobEntity();
    Object.assign(newJob, createJobDto);

    return await this.jobRepository.save(newJob);
  }
}
