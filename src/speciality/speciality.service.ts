import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Speciality } from './schemas/speciality.schema';
import { Model } from 'mongoose';

@Injectable()
export class SpecialityService {
  constructor(
    @InjectModel(Speciality.name) private specModel: Model<Speciality>,
  ) {}
  create(createSpecialityDto: CreateSpecialityDto) {
    return this.specModel.create(createSpecialityDto);
  }

  findAll() {
    return this.specModel.find().populate('workers');
  }

  findOne(id: number) {
    return this.specModel.findOne({ _id: id });
  }

  update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    return this.specModel.findByIdAndUpdate(id, updateSpecialityDto);
  }

  remove(id: number) {
    return this.specModel.deleteOne({ _id: id });
  }
}
