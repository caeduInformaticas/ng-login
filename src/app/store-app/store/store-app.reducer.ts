import { Action, createReducer, on } from '@ngrx/store';
import * as StoreAppActions from './store-app.actions';
import { homeValues } from '../home/HomeValues';

export const storeAppFeatureKey = 'storeApp';

export interface State {
  readonly storeAppData: any;
}

export const initialState: State = {
  storeAppData: {
    ...homeValues,
  },
};

export const storeAppReducer = createReducer(
  initialState,

  on(StoreAppActions.changeStoreAppData, (state, action) => {
    return { ...state, ...action.data }
  }),

);

