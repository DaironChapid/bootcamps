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

create(payload: any) {
    // crear una instacia de una entiti de bootcam
    const newBootcamp = this.BootcampRepository.create(payload)
    //grabar esa instancia 
    return this.BootcampRepository.save(newBootcamp) ;

  }

  findAll() {
    return this.BootcampRepository.find();
  }

  findOne(id: number) {
    return this.BootcampRepository.findOneBy({id});
  }


  // encontrar el bootcamp por id
  async update(id: number, payload: any) {
    const upBootampc = await this.BootcampRepository.findOneBy({id});

  this.BootcampRepository.merge(upBootampc, payload)
  
  this.BootcampRepository.save(upBootampc)
  }



  async remove(id: number) {
    const delBotcamp = await this.BootcampRepository.findOneBy({id});

    this.BootcampRepository.delete(delBotcamp)

    return delBotcamp
  }
}
