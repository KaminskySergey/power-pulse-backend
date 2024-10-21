import { Module } from '@nestjs/common';
import { CalculateService } from './calculate.service';
import { CalculateController } from './calculate.controller';
import { ProfileService } from 'src/profile/profile.service';
import { PrismaService } from 'src/prisma.service';
import { DailyActivitiesService } from 'src/daily-activities/daily-activities.service';

@Module({
  controllers: [CalculateController],
  providers: [DailyActivitiesService, CalculateService, ProfileService, PrismaService],
})
export class CalculateModule {}
