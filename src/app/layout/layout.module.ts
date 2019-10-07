import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';


import { NotFoundComponent } from './not-found/not-found.component';
import { GnbComponent } from './gnb/gnb.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        GnbComponent,
        NotFoundComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        TreeModule.forRoot()
    ],
    exports: [
        GnbComponent
    ]
})
export class LayoutModule {}