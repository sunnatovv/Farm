import { Injectable } from '@nestjs/common';
import { CreateRecordOfIlnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordOfIlness } from './schemas/record_of_ilness.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordOfIlnessService {
  constructor(
    @InjectModel(RecordOfIlness.name)
    private recordModel: Model<RecordOfIlness>,
  ) {}
  create(createRecordOfIlnessDto: CreateRecordOfIlnessDto) {
    return this.recordModel.create(createRecordOfIlnessDto);
  }

  findAll() {
    return this.recordModel.find();
  }

  findOne(id: string) {
    return this.recordModel.findOne({ id });
  }

  update(id: string, updateRecordOfIlnessDto: UpdateRecordOfIlnessDto) {
    return this.recordModel.findByIdAndUpdate(id, updateRecordOfIlnessDto);
  }

  remove(id: string) {
    return this.recordModel.deleteOne({ _id: id });
  }
}
