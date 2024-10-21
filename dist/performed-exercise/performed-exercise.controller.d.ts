import { PerformedExerciseService } from './performed-exercise.service';
import { ProfileService } from 'src/profile/profile.service';
import { CreatePerformedExerciseDto } from './dto/create-performed-exercise.dto';
export declare class PerformedExerciseController {
    private readonly performedExerciseService;
    readonly profileService: ProfileService;
    constructor(performedExerciseService: PerformedExerciseService, profileService: ProfileService);
    createConsumedProduct(data: CreatePerformedExerciseDto, id: string): unknown;
    deleteConsumedProduct(id: string): unknown;
}
