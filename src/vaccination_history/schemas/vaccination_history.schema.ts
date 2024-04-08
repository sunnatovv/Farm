import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class VaccinationHistory {
  @Prop()
  vaccinated_date: Date;
  @Prop()
  next_vaccination_date: string;
  @Prop()
  vaccination_photo: string;
}
export const VaccinationHisSchema = SchemaFactory.createForClass(VaccinationHistory);
