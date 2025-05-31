import { ReactEventHandler } from 'react';
import { User } from './user';

type Review = {
  id: string;
  date: Date;
  user: User;
  comment: string;
  rating: number;
};

type ReviewChangeHandler = ReactEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;

export type { Review, ReviewChangeHandler };
