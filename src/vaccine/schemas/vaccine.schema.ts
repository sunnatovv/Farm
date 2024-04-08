import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Vaccine {
  @Prop()
  vaccine_type: string;

  @Prop()
  vaccine_name: string;
}
export const VaccineSchema = SchemaFactory.createForClass(Vaccine);
