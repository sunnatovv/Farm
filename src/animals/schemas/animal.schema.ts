import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Animal {
  @Prop([String])
  photos: string[];

  @Prop()
  unique_id: string;
}
export const AnimalSchema = SchemaFactory.createForClass(Animal);
