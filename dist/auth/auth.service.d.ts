import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Response } from 'express';
import { AuthDto, AuthDtoRegister } from './dto/auth.dto';
import { ProfileService } from 'src/profile/profile.service';
export declare class AuthService {
    private jwt;
    private userService;
    private profileService;
    constructor(jwt: JwtService, userService: UserService, profileService: ProfileService);
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    login(dto: AuthDto): unknown;
    register(dto: AuthDtoRegister): unknown;
    getNewTokens(refreshToken: string): unknown;
    private returnUserFields;
    private issueTokens;
    private validateUser;
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenFromResponse(res: Response): void;
}
