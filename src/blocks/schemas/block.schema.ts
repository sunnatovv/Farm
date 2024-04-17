// import { Schema } from "mongoose";

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Block {
  @Prop()
  number: number;

  @Prop()
  description: string;
}
export const BlockSchema = SchemaFactory.createForClass(Block);
