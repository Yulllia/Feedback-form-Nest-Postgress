import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDto } from './createUserDto';
import { BackendValidationPipe } from '@app/shared/pipes/backendValidationPipe';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new BackendValidationPipe())
   createUser(@Body() createUserDto:CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
