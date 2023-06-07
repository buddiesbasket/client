import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Y Products': emptyProps(),
    'Y Products Success': props<{ data: unknown }>(),
    'Y Products Failure': props<{ error: unknown }>(),
  }
});
