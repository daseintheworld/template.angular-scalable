import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from 'src/app/core/services/session/session.service';

@Injectable()
export class LoginGuard implements CanActivate {


    constructor(private router: Router, private sessionService: SessionService)
    {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return of(true);
    }
}
