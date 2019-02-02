import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Crisis} from './crisis-center/crises-data/crisis';
import {CRISES} from './crisis-center/crises-data/mock-crisis';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  static nextCrisisId = 100
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES)

  getCrises() {return this.crises$}

  getCrisis(id: string | number) {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    )
  }

  addCrisis(name: string) {
    name = name.trim()
    if(name) {
      let crisis = {id: CrisisService++, name}
      CRISES.push(crisis)
      this.crises$.next(CRISES)
    }
  }

  constructor() { }
}
