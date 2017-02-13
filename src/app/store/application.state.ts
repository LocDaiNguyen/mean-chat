import { RouterState } from '@ngrx/router-store';

import { INITIAL_STORE_DATA_STATE, StoreDataState } from './store-data.state';
import { INITIAL_UI_STATE, UiState } from './ui.state';

export interface ApplicationState {
  routerState: RouterState;
  uiState: UiState;
  storeDataState: StoreDataState;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  routerState: { path: 'home' },
  uiState: INITIAL_UI_STATE,
  storeDataState: INITIAL_STORE_DATA_STATE
};
