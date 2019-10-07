// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpParams, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { v4 } from 'uuid';
// import { SessionService } from '../services/session/session.service';

// @Injectable()
// export class AuthorizationInterceptor implements HttpInterceptor {

//     constructor(private sessionService: SessionService) { }

//     intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {


//       return next.handle(request);
//     }
// }

// export let authorizationInterceptorProvider = {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthorizationInterceptor,
//     multi: true
// };