import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { ReducerType } from '../reducer';
import browserHistory from '../../browser-history';

const redirect: Middleware<unknown, ReducerType> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'app/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };

export { redirect };
