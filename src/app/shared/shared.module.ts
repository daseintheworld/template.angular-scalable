import { NgModule } from '@angular/core';
import { modules as CommonModules } from './modules/common-ui.module';
/**
 * title: shared module
 * description: 공통적으로 import 해야할 module를 정의한다.
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