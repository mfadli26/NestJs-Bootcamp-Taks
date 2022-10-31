import { Controller, Delete, Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from '../../entities/Countries';
import { Repository } from 'typeorm';

@Controller('api/country/')
@Injectable()
export class ConContoller {
  constructor(
    @InjectRepository(Countries) private CountRepo: Repository<Countries>,
  ) {}

  @Get()
  public async GetAll() {
    try {
      const country = await this.CountRepo.find();
      return country;
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  public async GetOne(@Param('id') id: string) {
    try {
      const country = await this.CountRepo.findOne({
        where: { countryId: id },
      });
      return country;
    } catch (error) {
      return error.message;
    }
  }
  @Delete(':id')
  public async Deleted(@Param('id') id: string) {
    try {
      const country = await this.CountRepo.delete(id);
      return 'Delete' + country.affected + 'rows';
    } catch (error) {
      return error.message;
    }
  }
}
