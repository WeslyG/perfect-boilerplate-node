import { Document } from 'mongoose';

export interface IAnswerModel extends Document {
  name: string;
  deleted: boolean;
}
