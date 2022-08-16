import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from 'src/core/domain/services/user.service';
import { CreateUserDTO } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  @HttpCode(201)
  async create(@Body() createDTO: CreateUserDTO) {
    await this.userService.create(
      createDTO.name,
      createDTO.email,
      createDTO.password,
    );
  }
}
