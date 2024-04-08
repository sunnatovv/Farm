import { Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { AnimalType } from './schemas/animal_type.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectModel(AnimalType.name) private animalModel: Model<AnimalType>,
  ) {}
  create(createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.animalModel.create(createAnimalTypeDto)
  }

  findAll() {
    return this.animalModel.find()
  }

  findOne(id: string) {
    return this.animalModel.findOne({id})
  }

  update(id: string, updateAnimalTypeDto: UpdateAnimalTypeDto) {
    return this.animalModel.findByIdAndUpdate(id, updateAnimalTypeDto);
  }

  remove(id: string) {
    this.animalModel.deleteOne({ _id: id });
  }
}
