import { CourseController } from './course.controller';
import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { UserModule } from 'src/User/user.module';

@Module({
  imports: [UserModule],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
