import { AnswerModel } from '../models/answerModel';
import { IAnswerModel } from '../interfaces/AnswerModel';

export const getPromise = async (): Promise<IAnswerModel> => {
  return await new AnswerModel({
    name: 'Name for all answer is 42',
  }).save();
};
