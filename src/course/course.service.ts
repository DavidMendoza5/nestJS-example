import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateCourseDto } from './dto/create.course.dto';
import { Course } from './model/course.model';

const courses: Course[] = [];

@Injectable()
export class CourseService {
  public create(courseDto: CreateCourseDto, userId:string): void {
    courses.push(new Course(uuidv4(), courseDto.coursename, userId));
  }

  public findAll(userId: string): Course[] {
    let userCourses: Course[] = [];
    for(let i: number = 0; i < courses.length; i++) {
      if(courses[i].userId === userId) {
        userCourses.push(courses[i]);
      }
    }
    return userCourses;
  }

  public findOneCourse(courseId: string): Course {
    let course: Course;
    for(let i: number = 0; i < courses.length; i++) {
      if(courses[i].id === courseId) {
        course = courses[i];
      }
    }
    return course;
  }
}
