import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop()
  full_name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phone_number: string;

  @Prop()
  tg_link: string;

  @Prop({ required: true })
  hashed_password: string;

  @Prop()
  hashed_refresh_token: string;

  @Prop({ default: true })
  is_active: string;

  @Prop({ default: false })
  is_creator: string;

  @Prop()
  description: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
