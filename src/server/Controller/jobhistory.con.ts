import { Controller, Delete, Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobHistory } from '../../entities/JobHistory';
import { Repository } from 'typeorm';

@Controller('api/jobhistory/')
@Injectable()
export class JobController {
  constructor(
    @InjectRepository(JobHistory) private jobhisRepo: Repository<JobHistory>,
  ) {}

  @Get()
  public async GetAll() {
    try {
      const jobhis = await this.jobhisRepo.find();
      return jobhis;
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  public async GetOne(@Param('id') id: number) {
    try {
      const jobhis = await this.jobhisRepo.findOne({
        where: { employeeId: id },
      });
      return jobhis;
    } catch (error) {
      return error.message;
    }
  }
  @Delete(':id')
  public async Deleted(@Param('id') id: string) {
    try {
      const jobhis = await this.jobhisRepo.delete(id);
      return 'Delete' + jobhis.affected + 'rows';
    } catch (error) {
      return error.message;
    }
  }
}
