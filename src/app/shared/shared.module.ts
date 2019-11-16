import { NgModule } from '@angular/core';
import { CommonModules } from './modules/common.module';
/**
 * title: shared module
 * description: 
 */
@NgModule({
    declarations: [
    ],
    imports: [
        ...CommonModules
    ],
    exports: [
        ...CommonModules
    ],
    entryComponents: [
    ]
})
export class SharedModule { }