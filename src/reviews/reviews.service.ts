import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private ReviewRepository: Repository<Review> ) {
  }



  create(payload: any) {
    const newReview= this.ReviewRepository.create(payload)
    //grabar esa instancia 
    return this.ReviewRepository.save(newReview) ;

  }

  findAll() {
    return this.ReviewRepository.find();
  }

  findOne(id: number) {
    return this.ReviewRepository.findOneBy({id});
  }

  async update(id: number, payload: any) {
    const upReview = await this.ReviewRepository.findOneBy({id});

  this.ReviewRepository.merge(upReview, payload)
  
  return this.ReviewRepository.save(upReview)
  }


  async remove(id: number) {
    const delReview = await this.ReviewRepository.findOneBy({id});

    this.ReviewRepository.delete(delReview)

    return delReview
  }
}
