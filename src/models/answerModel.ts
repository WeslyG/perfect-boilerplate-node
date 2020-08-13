import { Schema, model } from 'mongoose';
import { IAnswerModel } from '../interfaces/AnswerModel';

const answerShema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
    },
    deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

answerShema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    delete ret._id;
  },
});

export const AnswerModel = model < IAnswerModel > ('AnswerModel', answerShema);
