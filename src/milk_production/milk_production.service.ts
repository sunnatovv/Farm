import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { MilkProduction } from './schemas/milk_production.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MilkProductionService {
  constructor(
    @InjectModel(MilkProduction.name)
    private milkProdModel: Model<MilkProduction>,
  ) {}
  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.milkProdModel.create(createMilkProductionDto)
  }

  findAll() {
    return this.milkProdModel.find()
  }

  findOne(id: string) {
    return this.milkProdModel.findOne({id})
  }

  update(id: string, updateMilkProductionDto: UpdateMilkProductionDto) {
    return this.milkProdModel.findByIdAndUpdate(id, updateMilkProductionDto);
  }

  remove(id: string) {
    return this.milkProdModel.deleteOne({ _id: id });
  }
}
