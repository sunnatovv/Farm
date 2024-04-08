import { Module } from '@nestjs/common';
import { VaccinationHistoryService } from './vaccination_history.service';
import { VaccinationHistoryController } from './vaccination_history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccinationHisSchema, VaccinationHistory } from './schemas/vaccination_history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: VaccinationHistory.name, schema: VaccinationHisSchema }]),
  ],
  controllers: [VaccinationHistoryController],
  providers: [VaccinationHistoryService],
})
export class VaccinationHistoryModule {}
