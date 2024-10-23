import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {
//Inyectar: obtener una instancia del repositorio
//como atributo de la clase BootcampService
//sin necesidad de instanciarlo

constructor(@InjectRepository(Bootcamp) private BootcampRepository: Repository<Bootcamp> ) {

}

create(createBootcampDto: CreateBootcampDto) {
    return 'This action adds a new bootcamp';
  }

  findAll() {
    return this.BootcampRepository.find();
  }

  findOne(id: number) {
    return this.BootcampRepository.findOneBy({id});
  }

  update(id: number, updateBootcampDto: UpdateBootcampDto) {
    return `This action updates a #${id} bootcamp`;
  }

  remove(id: number) {
    return `This action removes a #${id} bootcamp`;
  }
}
