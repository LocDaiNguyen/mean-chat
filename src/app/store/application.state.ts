import { RouterState } from '@ngrx/router-store';

import { INITIAL_STORE_STATE, StoreState } from './store.state';
import { INITIAL_UI_STATE, UiState } from './ui.state';

export interface ApplicationState {
  uiState: UiState;
  storeState: StoreState;
  routerState: RouterState;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  uiState: INITIAL_UI_STATE,
  storeState: INITIAL_STORE_STATE,
  routerState: { path: 'home' },
};
