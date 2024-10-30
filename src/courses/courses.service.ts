
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, PayloadTooLargeException } from '@nestjs/common';
import { Course } from './entities/course.entity';

  @Injectable()
  export class CoursesService {
  constructor(@InjectRepository(Course) private CourseRepository: Repository<Course> ) {

  }

  create(payload: any){
    const newCurso = this.CourseRepository.create(payload) 
    return this.CourseRepository.save(newCurso)
  }
  
  FindAll(createCourseDto: any) {
    return this.CourseRepository.find()
  }

  findOne(id: number) {
    return this.CourseRepository.findOneBy({id: id});
  }

  update(id: number, updateCourseDto: any) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
