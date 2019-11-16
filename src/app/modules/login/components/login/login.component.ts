import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, empty, throwError, of, Observable, Subject } from 'rxjs';
import { LoginApiService } from 'src/app/core/services/http/login/api.service';
import { SessionService } from 'src/app/core/services/session/session.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    login: Subject<{id:string, pwd:string}> = new Subject();

    constructor(
        private loginApiService: LoginApiService,
        private sessionService: SessionService,
        private fb: FormBuilder
    ) {}

    formGroup: FormGroup = this.fb.group({
        'id': ['', [Validators.required]],
        'pwd': ['', [Validators.required]]
    });

    ngOnInit() {
        this.login.subscribe(o => {
            alert('login not implemented yet');
        })
    }
}
