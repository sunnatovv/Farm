import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';

@Schema()
export class FiberProduction {
  @Prop()
  fiber_yield: string;

  @Prop()
  shearing_schedule: string;
  
  @Prop()
  fiber_quality: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animals',
  })
  animal_id: Animal;
}
export const FiberProductionSchema =
  SchemaFactory.createForClass(FiberProduction);
