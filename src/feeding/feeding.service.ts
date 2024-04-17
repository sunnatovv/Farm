import { Injectable } from '@nestjs/common';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Feeding } from './schemas/feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class FeedingService {
  constructor(
    @InjectModel(Feeding.name)
    private feedModel: Model<Feeding>,
  ) {}
  create(createFeedingDto: CreateFeedingDto) {
    return this.feedModel.create(createFeedingDto);
  }

  findAll() {
    return this.feedModel.find();
  }

  findOne(id: number) {
    return this.feedModel.findOne({ _id: id });
  }

  update(id: number, updateFeedingDto: UpdateFeedingDto) {
    return this.feedModel.findByIdAndUpdate(id, updateFeedingDto);
  }

  remove(id: number) {
    return this.feedModel.deleteOne({ _id: id });
  }
}
