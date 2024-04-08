import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Speciality } from '../../speciality/schemas/speciality.schema';

@Schema()
export class Worker {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  experience: number;
  @Prop()
  phone_number: string;
  @Prop()
  user_name: string;
  @Prop()
  password: string;
  @Prop()
  worker_schedule: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speciality',
  })
  speciality_id: Speciality;

  @Prop()
  token: string;
}
export const WorkerSchema = SchemaFactory.createForClass(Worker);
