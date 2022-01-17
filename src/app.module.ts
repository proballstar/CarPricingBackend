import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './auth/user.entity';
import { Report } from './reports/report.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [UserEntity, Report],
    synchronize: true
  }), AuthModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
