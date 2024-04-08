import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class AnimalType {
  @Prop()
  name: string;

  @Prop()
  description: string;
}
export const AnimalTypeSchema = SchemaFactory.createForClass(AnimalType);
