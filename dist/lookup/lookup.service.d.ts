import { PrismaService } from 'src/prisma.service';
import { CreateLookupDto } from './dto/create-lookup.dto';
import { PaginationService } from 'src/pagination/pagination.service';
export declare class LookupService {
    readonly prisma: PrismaService;
    readonly paginationService: PaginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    getAll(dto: CreateLookupDto): unknown;
    importLookup(data: any): any;
}
