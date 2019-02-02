import { Component, OnInit } from '@angular/core';
import {Crisis} from '../crises-data/crisis';
import {HeroService} from '../crises-data/hero.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

const log = console.log.bind(console, 'crisis-list-component')

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  selectedId: number;

  crises$: Observable<Crisis[]>


  constructor(private heroService: HeroService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id')
        return this.heroService.getHeroes()
      })
    )
  }




}

