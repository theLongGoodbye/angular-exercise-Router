import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {HeroService} from '../crises-data/hero.service';
import {Crisis} from '../crises-data/crisis';
import {Observable} from 'rxjs';
import {DialogService} from '../../dialog.service';
const log = console.log.bind(console, 'crisis-detail-component')
@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
    crisis: Crisis
    editName: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  canDeactivate(): Observable<boolean> | boolean {
      if (!this.crisis || this.crisis.name === this.editName) {
        console.log('返回的是 true')
        return true
      }

      // 返回的是弹窗
      return this.dialogService.confirm('Discard changes?')
  }

  cancel() {
      this.gotoCrises()
  }

  save() {
      this.crisis.name = this.editName
      this.gotoCrises()
  }

  gotoCrises() {
      let crisisId = this.crisis ? this.crisis.id : null
      this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route})
  }



  ngOnInit() {
      this.route.data.subscribe((data: {crisis: Crisis}) => {
        log('data', data)
        this.editName = data.crisis.name
        this.crisis = data.crisis
      })
  }

}
