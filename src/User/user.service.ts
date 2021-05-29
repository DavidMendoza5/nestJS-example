import { Injectable } from '@nestjs/common';
import { Connection, EntityManager, getManager } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './model/user.model'

const users: User[] = [];

@Injectable()
export class UserService {
  constructor(private connection: Connection) {}

  public async create(userDto: CreateUserDto): Promise<void> {
    const manager: EntityManager = this.connection.manager;
    await manager.save(User, new User(userDto.name, userDto.username));
    // const queryRunner = this.connection.createQueryRunner()
    // users.push(new User(uuidv4(), userDto.name, userDto.username));
  }

  public findAll(): User[] {
    return users;
  }
}
