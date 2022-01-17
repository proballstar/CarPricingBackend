import { AuthService } from '../service/auth.service';
import { CreateUserDto } from '../dtos/create-user.dto';
export declare class AuthController {
    authService: AuthService;
    constructor(authService: AuthService);
    createUser(body: CreateUserDto): void;
    findUser(): void;
}
