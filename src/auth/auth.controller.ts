/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { RefreshJwtGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService,
    private authService: AuthService

  ) { }
  @Post('register')
  async registerUser(@Body() dto: UserDto) {
    return await this.userService.create(dto);

  }

  @Post('login')
  async loginUser(@Body() dto: LoginDto) {
    return await this.authService.login(dto);

  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    console.log('refreshed');
    return await this.authService.refreshToken(req.user);
  }


}
