import { DailyActivitiesService } from './daily-activities.service';
import { ProfileService } from 'src/profile/profile.service';
import { DailyActivitiesDto } from './dto/daily-activities.dto';
export declare class DailyActivitiesController {
    private readonly dailyActivitiesService;
    readonly profileService: ProfileService;
    constructor(dailyActivitiesService: DailyActivitiesService, profileService: ProfileService);
    getDailyActivities(query: DailyActivitiesDto, id: string): unknown;
}
