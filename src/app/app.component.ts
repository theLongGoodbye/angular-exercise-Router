import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import { interval } from 'rxjs';
import {slideInAnimation} from './animations';
import {RouterOutlet} from '@angular/router';


const log = console.log.bind(console)

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">crisis-center</a>
      <a routerLink="/heroes" routerLinkActive="active">heroes</a>
      <a routerLink="/admin" routerLinkActive="active">adimn</a>
      <a [routerLink]="[{ outlets: {popup: ['compose']}}]">Contact</a>
    </nav>
    <div [@routeAnimation]="getAnimationData(routerOutlet)">
      <router-outlet #routerOutlet="outlet"></router-outlet>
    </div>
    <router-outlet name="popup"></router-outlet>
    `,
  styleUrls: ['./app.component.css'],
  providers: [],
  animations: [ slideInAnimation ]
})

export class AppComponent implements OnInit {
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }



  constructor(


  ) {

  }

  ngOnInit() {

  }



}










