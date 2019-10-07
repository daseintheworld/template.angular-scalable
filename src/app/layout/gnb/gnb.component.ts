import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SessionService } from 'src/app/core/services/session/session.service';
import { Router } from '@angular/router';


/**
 * title: Top menu area
 * description: 상단의 메뉴 영역
 */
@Component({
  selector: 'app-gnb',
  templateUrl: './gnb.component.html',
  styleUrls: ['./gnb.component.css']
})
export class GnbComponent implements OnInit, AfterViewInit {

    constructor(public sessionService: SessionService, private router: Router){
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

    loggedOn$ = this.sessionService.loggedOn$;

    public onLogout(){
      this.sessionService.logout();
      this.router.navigate([]);
    }
}