import { Controller, Delete, Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from '../../entities/Jobs';
import { Repository } from 'typeorm';

@Controller('api/jobs/')
@Injectable()
export class JobsController {
  constructor(@InjectRepository(Jobs) private JobsRepo: Repository<Jobs>) {}

  @Get()
  public async GetAll() {
    try {
      const jobs = await this.JobsRepo.find();
      return jobs;
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  public async GetOne(@Param('id') id: string) {
    try {
      const jobs = await this.JobsRepo.findOne({
        where: { jobId: id },
      });
      return jobs;
    } catch (error) {
      return error.message;
    }
  }
  @Delete(':id')
  public async Deleted(@Param('id') id: string) {
    try {
      const jobs = await this.JobsRepo.delete(id);
      return 'Delete' + jobs.affected + 'rows';
    } catch (error) {
      return error.message;
    }
  }
}
