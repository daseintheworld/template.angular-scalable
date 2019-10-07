import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { map, mapTo } from 'rxjs/operators';
import { EnvService } from '../../env.service';

@Injectable({providedIn:'root'})
export class LoginApiService {

    private readonly url = this.envService.loginUrl;

    constructor(private http: HttpClient, private envService: EnvService) {
    }

    public getToken(id:string, pwd:string):Observable<any>{
        const headers = {}
        const formData = {}

        return this.http.post<any>(this.url, formData, {headers});
    }

}
