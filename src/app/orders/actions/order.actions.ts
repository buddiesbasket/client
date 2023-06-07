import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const OrderActions = createActionGroup({
  source: 'Order',
  events: {
    'Y Orders': emptyProps(),
    'Y Orders Success': props<{ data: unknown }>(),
    'Y Orders Failure': props<{ error: unknown }>(),
  }
});
