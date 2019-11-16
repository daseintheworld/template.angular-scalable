//angular
import { NgModule, inject } from '@angular/core';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//shared
import { SharedModule } from 'src/app/shared/shared.module';

//feature
import * as pg from './pages';
// import * as ct from './containers';
// import * as c from './components';
// import * as s from './services/entities';
import { reducer } from './store/reducers';
import { effects } from './store/effects';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        pg.HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        SharedModule,
        StoreModule.forFeature('home', reducer),
        EffectsModule.forFeature(effects)
    ],
    entryComponents:[
    ],
    providers: [
    ]
})
export class HomeModule {
}