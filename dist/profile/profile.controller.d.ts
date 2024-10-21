import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    getProgileById(userId: string): unknown;
    getAvatarProgileById(userId: string): unknown;
    updateProfile(userId: string, data: UpdateProfileDto): unknown;
    updateAvatar(userId: string, data: UpdateAvatarDto): unknown;
}
