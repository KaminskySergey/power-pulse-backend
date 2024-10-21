import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { PrismaService } from 'src/prisma.service';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService, PrismaService, PaginationService],
})
export class ExercisesModule {}
