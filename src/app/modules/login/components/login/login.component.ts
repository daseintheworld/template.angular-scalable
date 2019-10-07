import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { v4 } from 'uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { concatMap, tap, map, catchError, mergeMap, filter, mapTo } from 'rxjs/operators';
import { combineLatest, empty, throwError, of, Observable } from 'rxjs';
import { LoginApiService } from 'src/app/core/services/http/login/api.service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { MatDialog } from '@angular/material';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit{

    login: EventEmitter<{id:string, pwd:string}> = new EventEmitter();

    constructor(
        private loginApiService: LoginApiService,
        private sessionService: SessionService,
        private fb: FormBuilder
    ) {}

    formGroup: FormGroup = this.fb.group({
        'id': [{value: ''}, [Validators.required]],
        'pwd': [{value: ''}, [Validators.required]]
    });

    ngOnInit() {}

    ngAfterViewInit(): void {}
}
