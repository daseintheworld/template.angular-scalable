import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
    {
        path: ``,
        canActivate: [LoginGuard],
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [LoginGuard]
})
export class LoginRoutingModule{}