import { environment } from '../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { compose } from '@ngrx/core';
import { StoreModule, ActionReducer, Action, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule, routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { ApplicationState, INITIAL_APPLICATION_STATE } from './store/application.state';
import { storeStateReducer } from './store/store.reducer';
import { uiStateReducer } from './store/ui.reducer';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlertComponent } from './alert/alert.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { MessageListComponent } from './message-list/message-list.component';

export const reducers = {
  uiState: uiStateReducer,
  storeState: storeStateReducer,
  routerState: routerReducer
};

const developmentReducers: ActionReducer<ApplicationState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducers: ActionReducer<ApplicationState> = combineReducers(reducers);

export function storeReducer(state: ApplicationState, action: Action): ApplicationState {
  if (environment.production) {
    return productionReducers(state, action);
  } else {
    return developmentReducers(state, action);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlertComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    ThreadListComponent,
    MessageSectionComponent,
    MessageListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(storeReducer, INITIAL_APPLICATION_STATE),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
