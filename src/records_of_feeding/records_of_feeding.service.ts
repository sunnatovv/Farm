import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordOfIlness } from '../record_of_ilness/schemas/record_of_ilness.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordsOfFeedingService {
  constructor(
    @InjectModel(RecordOfIlness.name)
    private recordModel: Model<RecordOfIlness>,
  ) {}
  create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {
    return this.recordModel.create(createRecordsOfFeedingDto);
  }

  findAll() {
    return this.recordModel.find();
  }

  findOne(id: number) {
    return this.recordModel.findOne({ _id: id });
  }

  update(id: number, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto) {
    return this.recordModel.findByIdAndUpdate(id, updateRecordsOfFeedingDto);
  }

  remove(id: number) {
    return this.recordModel.deleteOne({ _id: id });
  }
}
