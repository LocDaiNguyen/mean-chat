import { Action } from '@ngrx/store';

import { StoreState } from './store.state';

export function storeStateReducer(state: StoreState, action: Action): StoreState {

  switch (action.type) {

    default:
      return state;
  }
}
