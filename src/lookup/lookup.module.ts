import { Module } from '@nestjs/common';
import { LookupService } from './lookup.service';
import { LookupController } from './lookup.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  controllers: [LookupController],
  providers: [LookupService, PrismaService, PaginationService],
})
export class LookupModule {}
