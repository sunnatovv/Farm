// import { Schema } from "mongoose";

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Speciality {
  @Prop([String])
  title: string[];

  @Prop()
  description: string;
}
export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
