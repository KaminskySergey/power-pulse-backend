import { AuthDtoRegister } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { ProfileService } from 'src/profile/profile.service';
export declare class UserService {
    private prisma;
    private profileService;
    constructor(prisma: PrismaService, profileService: ProfileService);
    getById(id: string): unknown;
    getByEmail(email: string): unknown;
    create(dto: AuthDtoRegister): unknown;
}
