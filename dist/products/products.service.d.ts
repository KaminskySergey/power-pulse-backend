import { ProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationService } from 'src/pagination/pagination.service';
import { Prisma } from '@prisma/client';
export declare class ProductsService {
    readonly prisma: PrismaService;
    readonly paginationService: PaginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    getAll(dto?: ProductDto, profileId?: string): Promise<{
        products: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            weight: number;
            calories: number;
            category: string;
            title: string;
            groupBloodNotAllowed: Prisma.JsonValue;
            categoryId: string;
        }[];
        page: number;
        length: number;
    }>;
    importFoods(data: any): Promise<void>;
    private createFilter;
    private getSearchTermFilter;
    private getCategoryFilter;
    private getBloodGroupFilter;
    private getBloodGroupNumber;
}
