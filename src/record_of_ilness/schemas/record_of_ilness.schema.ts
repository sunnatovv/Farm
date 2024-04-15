import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
import { Worker } from '../../worker/schemas/worker.schemas';

@Schema()
export class RecordOfIlness {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animals',
  })
  animal_id: Animal;

  @Prop()
  ilness_type: Date;

  @Prop()
  date_disease: string;
  @Prop()
  medicines: string;
  @Prop()
  date_treatment: string;
  @Prop()
  illness_photo: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workers',
  })
  worker_id: Worker;
}
export const RecordOfIlnessSchema =
  SchemaFactory.createForClass(RecordOfIlness);
