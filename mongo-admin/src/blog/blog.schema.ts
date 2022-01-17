import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop()
  autorName: string;

  @Prop()
  title: string;

  @Prop()
  content: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
