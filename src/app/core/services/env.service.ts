import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * environment variables will be encapsulated and reassembled if necessary
 */
@Injectable({providedIn: "root"})
export class EnvService {
    loginUrl: string;

    constructor() {
    }
}
