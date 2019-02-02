import { Injectable } from '@angular/core';

import {HEROES} from './mock-heroes';
import {of} from 'rxjs';
import {MessageService} from '../../message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: string | number) {
    const h = HEROES.find(hero => hero.id === + id)
    return of(h)
  }

  getHeroes() {
    this.messageService.add('获取英雄')
    return of(HEROES)
  }

}
