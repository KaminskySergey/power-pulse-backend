import { PrismaService } from 'src/prisma.service';
import { CreateConsumendProductDto } from './dto/create-consumend-product.dto';
export declare class ConsumedProductService {
    readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    createConsumedProduct(dto: CreateConsumendProductDto, profileId: string): unknown;
    delete(id: string, date: string): unknown;
}
