import { AuthService } from './auth.service';
import { AuthDto, AuthDtoRegister } from './dto/auth.dto';
import { Response, Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): unknown;
    register(dto: AuthDtoRegister, res: Response): unknown;
    logout(res: Response): unknown;
    getNewTokens(req: Request, res: Response): unknown;
}
