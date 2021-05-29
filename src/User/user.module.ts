import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './model/schema/user.schema';
import { UnitOfWork } from 'src/share/unitofwork/unit-of-work.provider';
// import {  } from './repository/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserSchema]), UnitOfWork],
    controllers: [
        UserController, ],
    providers: [
        UserService, ],
    exports: [
        UserService,
    ]
})
export class UserModule {}
