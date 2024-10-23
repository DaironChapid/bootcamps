import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

  @Injectable()
  export class CoursesService {
  constructor(@InjectRepository(Course) private CourseRepository: Repository<Course> ) {

  }

  FindAll(createCourseDto: CreateCourseDto) {
    return this.CourseRepository.find();
  }

  findOne(id: number) {
    return this.CourseRepository.findOneBy({id});
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
