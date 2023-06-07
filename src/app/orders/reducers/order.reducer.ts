import { createReducer, on } from '@ngrx/store';
import { OrderActions } from '../actions/order.actions';

export const orderFeatureKey = 'order';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

