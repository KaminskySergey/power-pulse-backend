import { PrismaService } from 'src/prisma.service';
import { ExercisesDto } from './dto/exercises.dto';
import { PaginationService } from 'src/pagination/pagination.service';
export declare class ExercisesService {
    readonly prisma: PrismaService;
    readonly paginationService: PaginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    getAll(dto: ExercisesDto): unknown;
    importExercises(data: any): any;
}
