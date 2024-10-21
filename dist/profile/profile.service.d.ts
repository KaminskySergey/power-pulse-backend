import { PrismaService } from 'src/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProfile(userId: any, data: CreateProfileDto): unknown;
    updateProfile(id: string, data: UpdateProfileDto): unknown;
    updateAvatar(id: string, avatarPath: string): unknown;
    getAvatarProfileIdByUserId(userId: string): unknown;
    getProfileIdByUserId(userId: string): unknown;
}
