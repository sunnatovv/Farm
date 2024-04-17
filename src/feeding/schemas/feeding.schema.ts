import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
import { Worker } from '../../worker/schemas/worker.schemas';

@Schema()
export class Feeding {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal',
  })
  animal_id: Animal;
  @Prop()
  feeding_schedules: string;

  @Prop()
  types_of_feed: string;
  @Prop()
  dietary: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Worker',
  })
  worker_id: Worker;
}
export const FeedingSchema = SchemaFactory.createForClass(Feeding);
