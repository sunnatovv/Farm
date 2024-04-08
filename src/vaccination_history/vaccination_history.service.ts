import { Injectable } from '@nestjs/common';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VaccinationHistory } from './schemas/vaccination_history.schema';

@Injectable()
export class VaccinationHistoryService {
  constructor(
    @InjectModel(VaccinationHistory.name)
    private vacHisModel: Model<VaccinationHistory>,
  ) {}

  create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    return this.vacHisModel.create(createVaccinationHistoryDto);
  }

  findAll() {
    return this.vacHisModel.find();
  }

  findOne(id: string) {
    return this.vacHisModel.findOne({ id });
  }

  update(id: string, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto) {
    return this.vacHisModel.findByIdAndUpdate(id, updateVaccinationHistoryDto);
  }

  remove(id: string) {
    this.vacHisModel.deleteOne({ _id: id });
    
  }
}
