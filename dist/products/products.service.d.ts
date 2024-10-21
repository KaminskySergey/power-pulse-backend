import { ProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma.service';
import { PaginationService } from 'src/pagination/pagination.service';
export declare class ProductsService {
    readonly prisma: PrismaService;
    readonly paginationService: PaginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    getAll(dto?: ProductDto, profileId?: string): unknown;
    importFoods(data: any): any;
    private createFilter;
    private getSearchTermFilter;
    private getCategoryFilter;
    private getBloodGroupFilter;
    private getBloodGroupNumber;
}
