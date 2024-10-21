import { ExercisesService } from './exercises.service';
import { ExercisesDto } from './dto/exercises.dto';
export declare class ExercisesController {
    private readonly exercisesService;
    constructor(exercisesService: ExercisesService);
    getAll(queryDto: ExercisesDto): unknown;
    importExercises(data: any): unknown;
}
