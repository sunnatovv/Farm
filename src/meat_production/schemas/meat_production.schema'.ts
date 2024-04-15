import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';

@Schema()
export class MeatProduction {
  @Prop()
  meat_yield: string;

  @Prop()
  slaughter_date: Date;
  @Prop()
  shearing_schedule: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animals',
  })
  animal_id: Animal;
}
export const MeatProductionSchema = SchemaFactory.createForClass(MeatProduction);
