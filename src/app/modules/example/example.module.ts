//angular
import { NgModule, inject } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { RouterModule } from '@angular/router';

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
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
    declarations: [
        pg.HomeComponent
    ],
    imports: [
        ExampleRoutingModule,
        SharedModule,
        TreeModule.forRoot(),
        StoreModule.forFeature('example', reducer),
        EffectsModule.forFeature(effects)
    ],
    entryComponents:[
    ],
    providers: [
    ]
})
export class ExampleModule {
}