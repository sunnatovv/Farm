import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Feeding } from '../../feeding/schemas/feeding.schema';

@Schema()
export class RecordsOfFeeding {
  @Prop()
  date: Date;

  @Prop()
  consumption: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feeding',
  })
  feeding_id: Feeding;
}
export const RecordsOfFeedingSchema =
  SchemaFactory.createForClass(RecordsOfFeeding);
