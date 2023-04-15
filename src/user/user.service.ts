import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DeleteResult, FindOneOptions, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, of } from 'rxjs';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  create(createUserDto: CreateUserDto): Observable<User> {
    return from(this.userRepository.save(createUserDto));
  }

  findAll(): Observable<User[]> {
    return from(this.userRepository.find());
  }

  findOne(id: number): Observable<User> {
    return from(this.userRepository.findOneBy({
      id: id
    }));
  }

  update(id: number, updateUserDto: UpdateUserDto): Observable<UpdateResult> {
    return from(this.userRepository.update(id, updateUserDto));
  }

  remove(id: number): Observable<DeleteResult> {
    return from(this.userRepository.delete(id));
  }
}
