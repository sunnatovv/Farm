import { Injectable } from '@nestjs/common';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FiberProduction } from './schemas/fiber_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class FiberProductionService {
  constructor(
    @InjectModel(FiberProduction.name)
    private fiberProdModel: Model<FiberProduction>,
  ) {}
  create(createFiberProductionDto: CreateFiberProductionDto) {
    return this.fiberProdModel.create(createFiberProductionDto);
  }

  findAll() {
    return this.fiberProdModel.find();
  }

  findOne(id: string) {
    return this.fiberProdModel.findOne({ id });
  }

  update(id: string, updateFiberProductionDto: UpdateFiberProductionDto) {
    return this.fiberProdModel.findByIdAndUpdate(id, updateFiberProductionDto);
  }

  remove(id: string) {
    return this.fiberProdModel.deleteOne({ _id: id });
  }
}
