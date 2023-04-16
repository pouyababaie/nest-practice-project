import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('postRegistration')
  postRegistration(@Body() user: CreateUserDto): Observable<any> {
    return this.userService.create(user);
  }

  @Get('getRegisterUser')
  getRegisterUser(): Observable<User[]> {
    return this.userService.findAll();
  }

  @Get('getRegisterUserId/:id')
  getRegisterUserId(@Param('id') id: number): Observable<User> {
    return this.userService.findOne(+id);
  }

  @Patch('updateUser/:id')
  updateRegisterUser(@Param('id') id: number, @Body() user: UpdateUserDto): Observable<any> {
    return this.userService.update(+id, user);
  }

  @Delete('deleteRegisterd/:id')
  deleteRegisterd(@Param('id') id: number): Observable<any> {
    return this.userService.remove(+id);
  }
}
