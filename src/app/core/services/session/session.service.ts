import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SessionService {

    getCommonHeaderProperties(): {} {
        return {};
    }

    loggedOn$: Observable<boolean>;

    logout() {
        throw new Error("Method not implemented.");
    }
}
