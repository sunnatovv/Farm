// import { Schema } from "mongoose";

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Worker } from '../../worker/schemas/worker.schemas';

@Schema()
export class Speciality {
  @Prop([String])
  title: string[];

  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: 'Worker' }] })
  workers: Worker[];
}
export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
