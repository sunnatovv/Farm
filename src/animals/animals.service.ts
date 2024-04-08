import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './schemas/animal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) {}
  create(createAnimalDto: CreateAnimalDto) {
    return this.animalModel.create(createAnimalDto);
  }

  findAll() {
    return this.animalModel.find();
  }

  findOne(id: string) {
    return this.animalModel.findOne({ id });
  }

  update(id: string, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel.findByIdAndUpdate(id, updateAnimalDto);
  }

  remove(id: string) {
    this.animalModel.deleteOne({ _id: id });
  }
}
