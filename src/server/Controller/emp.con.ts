import { Controller, Delete, Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from '../../entities/Employees';
import { Repository } from 'typeorm';

@Controller('api/employees/')
@Injectable()
export class EmpController {
  constructor(
    @InjectRepository(Employees) private EmployRepo: Repository<Employees>,
  ) {}

  @Get()
  public async GetAll() {
    try {
      const employees = await this.EmployRepo.find();
      return employees;
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  public async GetOne(@Param('id') id: number) {
    try {
      const employees = await this.EmployRepo.findOne({
        where: { employeeId: id },
      });
      return employees;
    } catch (error) {
      return error.message;
    }
  }
  @Delete(':id')
  public async Deleted(@Param('id') id: number) {
    try {
      const employees = await this.EmployRepo.delete(id);
      return 'Delete' + employees.affected + 'rows';
    } catch (error) {
      return error.message;
    }
  }
}
