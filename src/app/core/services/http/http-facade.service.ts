import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders, HttpHandler, HttpBackend } from '@angular/common/http';
import { SessionService } from '../session/session.service';


@Injectable({providedIn:'root'})
export class HttpFacadeService {

    constructor(private http: HttpClient, private sessionService: SessionService)
    {}

    private getOptions(body:any = null): {
        body?: any;
        headers: HttpHeaders | {
            [header: string]: string | string[];
        };
        //reportProgress?: boolean;
        observe: 'response';
        // params?: HttpParams | {
        //     [param: string]: string | string[];
        // };
        responseType: 'json';
    } {
        const commonProperties = this.sessionService.getCommonHeaderProperties();

        const headers = new HttpHeaders(commonProperties);
        const observe = 'response';
        const responseType = 'json';

        if(body) {
            headers.set('Content-Type', 'application/json');
        }

        return {
            body,
            headers,
            observe,
            responseType
        }
    };

    public get<T>(url: string): Observable<T> {
        var options = this.getOptions();

         return this.http.request('GET',url, options).pipe(
             map(o => o.body as T)
         )
    }

    public create<T>(url: string, data: Object): Observable<T> {

        var options = this.getOptions(data);

        return this.http.request('POST', url, options).pipe(
            map(o => o.body as T)
        );
    }

    public update<T>(url: string, data: Object): Observable<T> {

        var options = this.getOptions(data);

        return this.http.request('PUT', url, options).pipe(
            map(o => o.body as T)
        );
    }

    public delete<T>(url: string, data: Object = null): Observable<T> {

        var options = this.getOptions(data);

        return this.http.request('DELETE', url, options).pipe(
            map(o => o.body as T)
        );
    }
}
