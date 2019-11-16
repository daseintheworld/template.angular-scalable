import { Routes, RouterModule } from '@angular/router';
import { PATH, OUTLET, MATRIX } from './services/routing/term';
import { HomeComponent } from './pages';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: ``,
        component: HomeComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}