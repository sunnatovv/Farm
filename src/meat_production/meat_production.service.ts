import { Injectable } from '@nestjs/common';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MeatProduction } from "./schemas/meat_production.schema'";

@Injectable()
export class MeatProductionService {
  constructor(
    @InjectModel(MeatProduction.name)
    private meatProdModel: Model<MeatProduction>,
  ) {}
  create(createMeatProductionDto: CreateMeatProductionDto) {
    return this.meatProdModel.create(createMeatProductionDto);
  }

  findAll() {
    return this.meatProdModel.find();
  }

  findOne(id: string) {
    return this.meatProdModel.findOne({ _id: id });
  }

  update(id: string, updateMeatProductionDto: UpdateMeatProductionDto) {
    return this.meatProdModel.findByIdAndUpdate(id, updateMeatProductionDto);
  }

  remove(id: string) {
    return this.meatProdModel.deleteOne({ _id: id });
  }
}
