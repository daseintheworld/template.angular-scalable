import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, combineLatest, Subject, empty, EMPTY } from 'rxjs';
import { tap, map, takeUntil, take, filter, mergeMap, withLatestFrom } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit, OnDestroy {
    private _destroy: Subject<void> = new Subject();

    constructor(
        private dialog: MatDialog
    ) {}

    ngOnInit() {
    }

    ngAfterViewInit(){
    }

    ngOnDestroy(): void {
        this._destroy.next();
    }
}
