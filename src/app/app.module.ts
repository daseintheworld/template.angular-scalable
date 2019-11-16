import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// root component
import { AppComponent } from './app.component';

//core
import { LayoutModule } from './layout/layout.module';
import { AuthorizationGuard } from './authorization.guard';

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      console.log('reducer : ' + action.type, action);

      return reducer(state, action);
    };
  }

  export const metaReducers: MetaReducer<any>[] = [debug];


@NgModule({
    declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            LayoutModule,

            HttpClientModule,

            AppRoutingModule,

            CoreModule,
            SharedModule,

            StoreModule.forRoot({}, {metaReducers}),
            EffectsModule.forRoot([]),
    ],
    providers: [
        AuthorizationGuard,
        {
            provide: COMPOSITION_BUFFER_MODE,
            useValue: false      },
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
