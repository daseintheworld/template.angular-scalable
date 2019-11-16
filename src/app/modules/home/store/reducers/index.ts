import {
    ActionReducer,
    createSelector,
    combineReducers,
    compose,
    createFeatureSelector,
    Action} from '@ngrx/store';
// import { environment } from '../../environments/environment';

import { storeFreeze } from 'ngrx-store-freeze';

import * as fromExample from './example';

export interface State {
    example: fromExample.State;
}

const reducers = {
    example: fromExample.reducer
};

// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: State, action: Action) {
//   if (environment.production) {
    return productionReducer(state, action);
//   } else {
    // return developmentReducer(state, action);
//   }
}
