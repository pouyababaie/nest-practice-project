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
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User): Observable<any> {
    return this.userService.create(user);
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<User> {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() user: User): Observable<any> {
    return this.userService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<any> {
    return this.userService.remove(+id);
  }
}
