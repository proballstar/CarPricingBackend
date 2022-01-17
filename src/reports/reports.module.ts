import { Module } from '@nestjs/common';
import { ReportsService } from './service/reports.service';
import { ReportsController } from './controller/reports.controller';

@Module({
  providers: [ReportsService],
  controllers: [ReportsController]
})
export class ReportsModule {}
