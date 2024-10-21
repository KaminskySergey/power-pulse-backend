import { PrismaService } from 'src/prisma.service';
export declare class StatisticsService {
    readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    getAllInfo(): unknown;
    private getAllVideo;
    private getAllUser;
    private getTotalCaloriesBurned;
    private getTotalHoursSpent;
    private getTotalWorkoutsCompleted;
}
