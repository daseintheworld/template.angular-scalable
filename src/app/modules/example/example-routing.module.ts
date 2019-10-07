import { Routes, RouterModule } from '@angular/router';
import { PATH, OUTLET, MATRIX } from './services/routing/term';
import { HomeComponent } from './pages';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: ``,
        redirectTo: `${PATH.HOME}`,
        pathMatch: 'full'
    },
    {
        path: `${PATH.HOME}`,
        component: HomeComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExampleRoutingModule{}