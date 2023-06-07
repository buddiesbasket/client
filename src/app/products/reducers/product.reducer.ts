import { createReducer, on } from '@ngrx/store';
import { ProductActions } from '../actions/product.actions';

export const productFeatureKey = 'product';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

