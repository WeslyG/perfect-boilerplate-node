import { AnswerModel } from '../models/answerModel';

export const getPromise = async () => {
  return await new AnswerModel({
    name: 'Name for all answer is 42'
  }).save();
};
