import { Injectable, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router, UrlTree, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { MATRIX, PATH, DATA, EXTRA_STATE, OUTLET } from './term';

@Injectable({providedIn:"root"})

export class ExampleNavigationService {

    constructor(private router: Router)
    {}

}