import { CourseModule } from './course/course.module';
import { CourseService } from './course/course.service';
import { UserModule } from './User/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CourseModule, UserModule],
  controllers: [AppController],
  providers: [CourseService, AppService],
})
export class AppModule {}
