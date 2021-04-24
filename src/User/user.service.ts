import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './model/user.model'

const users: User[] = [];

@Injectable()
export class UserService {
  public create(userDto: CreateUserDto): void {
    users.push(new User(uuidv4(), userDto.name, userDto.username));
  }

  public findAll(): User[] {
    return users;
  }
}
