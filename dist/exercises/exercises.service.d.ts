import { PrismaService } from 'src/prisma/prisma.service';
import { ExercisesDto } from './dto/exercises.dto';
import { PaginationService } from 'src/pagination/pagination.service';
export declare class ExercisesService {
    readonly prisma: PrismaService;
    readonly paginationService: PaginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    getAll(dto: ExercisesDto): Promise<{
        exercises: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            bodyPart: string;
            equipment: string;
            gifUrl: string;
            name: string;
            target: string;
            burnedCalories: number;
            time: number;
        }[];
        page: number;
        total: number;
    }>;
    importExercises(data: any): Promise<void>;
}
