import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
      id: Number(id)
    }));
  }

  update(id: number, updateUserDto: UpdateUserDto): Observable<UpdateResult> {
    return from(this.userRepository.update(Number(id), updateUserDto));
  }

  remove(id: number): Observable<DeleteResult> {
    return from(this.userRepository.delete((Number(id))));
  }

}
