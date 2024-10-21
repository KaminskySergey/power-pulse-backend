import { PrismaService } from 'src/prisma.service';
export declare class CategoryService {
    readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    getAll(): unknown;
    create(): any;
}
