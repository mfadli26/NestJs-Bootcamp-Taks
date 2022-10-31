import { Controller, Delete, Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locations } from '../../entities/Locations';
import { Repository } from 'typeorm';

@Controller('api/location/')
@Injectable()
export class LocController {
  constructor(
    @InjectRepository(Locations) private LocRepo: Repository<Locations>,
  ) {}

  @Get()
  public async GetAll() {
    try {
      const location = await this.LocRepo.find();
      return location;
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  public async GetOne(@Param('id') id: number) {
    try {
      const location = await this.LocRepo.findOne({
        where: { locationId: id },
      });
      return location;
    } catch (error) {
      return error.message;
    }
  }
  @Delete(':id')
  public async Deleted(@Param('id') id: string) {
    try {
      const location = await this.LocRepo.delete(id);
      return 'Delete' + location.affected + 'rows';
    } catch (error) {
      return error.message;
    }
  }
}
