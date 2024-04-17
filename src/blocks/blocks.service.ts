import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Block } from './schemas/block.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BlocksService {
  constructor(
    @InjectModel(Block.name)
    private blockModel: Model<Block>,
  ) {}
  create(createBlockDto: CreateBlockDto) {
    return this.blockModel.create(createBlockDto);
  }

  findAll() {
    return this.blockModel.find();
  }

  findOne(id: number) {
    return this.blockModel.findOne({ _id: id });
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return this.blockModel.findByIdAndUpdate(id, updateBlockDto);
  }

  remove(id: number) {
    return this.blockModel.deleteOne({ _id: id });
  }
}
