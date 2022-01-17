import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        public authService: AuthService
    ){}

    @Post('/signup')
    createUser(
        @Body() 
        body: CreateUserDto
    ) {

    }

    @Get('/:id')
    findUser() {

    }
}
