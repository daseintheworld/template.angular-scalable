import { State } from '../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getFeatureState = createFeatureSelector<State>('example');

export const getExampleState = createSelector(getFeatureState, state => state.example);