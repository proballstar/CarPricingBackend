import { Controller } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        public authService: AuthService
    ){}
}
