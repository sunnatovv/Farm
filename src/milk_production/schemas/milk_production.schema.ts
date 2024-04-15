import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';

@Schema()
export class MilkProduction {
  @Prop()
  milk_yield: string;

  @Prop()
  milk_schedule: string;
  @Prop()
  milk_quality: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animals',
  })
  animal_id: Animal;
}
export const MilkProductionSchema =
  SchemaFactory.createForClass(MilkProduction);
