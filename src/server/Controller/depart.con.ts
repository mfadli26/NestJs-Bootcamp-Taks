import { Controller, Delete, Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from '../../entities/Departments';
import { Repository } from 'typeorm';

@Controller('api/departments/')
@Injectable()
export class DepartController {
  constructor(
    @InjectRepository(Departments) private departRepo: Repository<Departments>,
  ) {}

  @Get()
  public async GetAll() {
    try {
      const department = await this.departRepo.find();
      return department;
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  public async GetOne(@Param('id') id: number) {
    try {
      const department = await this.departRepo.findOne({
        where: { departmentId: id },
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }
  @Delete(':id')
  public async Deleted(@Param('id') id: number) {
    try {
      const department = await this.departRepo.delete(id);
      return 'Delete' + department.affected + 'rows';
    } catch (error) {
      return error.message;
    }
  }
}
