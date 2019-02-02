import { Component, OnInit } from '@angular/core';
import {Hero} from '../Heros-data/hero';
import {HeroService} from '../Heros-data/hero.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

const log = console.log.bind(console, 'crisis-list-component')

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  selectedId: number;

  heroes$: Observable<Hero[]>

  h



  constructor(private heroService: HeroService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id')
        return this.heroService.getHeroes()
      })
    )

    this.heroes$.subscribe(data => this.h = data)


  }




}

