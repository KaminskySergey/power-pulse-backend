import { PrismaService } from 'src/prisma.service';
import { CreatePerformedExerciseDto } from './dto/create-performed-exercise.dto';
export declare class PerformedExerciseService {
    readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    createPerformedExercise(dto: CreatePerformedExerciseDto, profileId: string): unknown;
    delete(id: string): unknown;
}
