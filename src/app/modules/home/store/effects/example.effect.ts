import { Injectable } from '@angular/core';
import { Action, Store, createSelector } from '@ngrx/store';
import { Actions, ofType, createEffect, Effect, OnInitEffects } from '@ngrx/effects';
import { of, Observable, empty, NEVER, combineLatest } from 'rxjs';
import { map, mergeMap, withLatestFrom, filter, tap, switchMap } from 'rxjs/operators';
import { AppState } from 'src/app/core/store';

@Injectable()
export class ExampleEffects  {

    constructor(
        private actions$: Actions,
        private store: Store<AppState>
    ) {}
}