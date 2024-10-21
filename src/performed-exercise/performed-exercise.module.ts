import { Module } from '@nestjs/common';
import { PerformedExerciseService } from './performed-exercise.service';
import { PerformedExerciseController } from './performed-exercise.controller';
import { PrismaService } from 'src/prisma.service';
import { ProfileService } from 'src/profile/profile.service';

@Module({
  controllers: [PerformedExerciseController],
  providers: [PerformedExerciseService, PrismaService, ProfileService],
})
export class PerformedExerciseModule {}
