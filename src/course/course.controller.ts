import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create.course.dto';
import { Course } from './model/course.model'

@Controller('users/:userId/courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  async createCourse(@Body() createCourseDto: CreateCourseDto, @Param() params: any): Promise<void> {
    return this.courseService.create(createCourseDto, params.userId);
  }

  @Get() 
    async findAllCourses(@Param('userId') id: string): Promise<Course[]> {
      return this.courseService.findAll(id);
    }

    @Get(':id')
    async findOneCourse(@Param('id') id: string): Promise<Course> {
      return this.courseService.findOneCourse(id);
    }
}
