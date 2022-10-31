import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from '../entities/Regions';
import { Countries } from '../entities/Countries';
import { Departments } from '../entities/Departments';
import { Employees } from '../entities/Employees';
import { JobHistory } from '../entities/JobHistory';
import { Jobs } from '../entities/Jobs';
import { Locations } from '../entities/Locations';
import { MulterModule } from '@nestjs/platform-express';
import { RegControll } from './Controller/reg.con';
import { ConContoller } from './Controller/coun.con';
import { DepartController } from './Controller/depart.con';
import { EmpController } from './Controller/emp.con';
import { JobController } from './Controller/jobhistory.con';
import { JobsController } from './Controller/jobs.con';
import { LocController } from './Controller/location.con';
import { ConfigMulter } from './Middleware/multer.conf';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Regions,
      Countries,
      Departments,
      Employees,
      JobHistory,
      Jobs,
      Locations,
    ]),
    MulterModule.register(ConfigMulter.UploadFiles()),
  ],
  providers: [],
  controllers: [
    RegControll,
    ConContoller,
    DepartController,
    EmpController,
    JobController,
    JobsController,
    LocController,
  ],
})
export class ServerModule {}
