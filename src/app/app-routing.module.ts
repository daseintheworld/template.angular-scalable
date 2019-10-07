import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AuthorizationGuard } from './authorization.guard';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthorizationGuard],
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'example', loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule) },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ],
    },
    { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '/404'}
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes,{ useHash:true, onSameUrlNavigation: 'reload'})//, { useHash:true, onSameUrlNavigation: 'reload'}
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }
