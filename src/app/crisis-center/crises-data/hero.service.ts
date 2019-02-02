import { Injectable } from '@angular/core';

import {CRISES} from './mock-crisis';
import {of} from 'rxjs';
import {MessageService} from '../../message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: string | number) {
    const h = CRISES.find(hero => hero.id === + id)
    return of(h)
  }

  getHeroes() {
    this.messageService.add('获取英雄')
    return of(CRISES)
  }

}
