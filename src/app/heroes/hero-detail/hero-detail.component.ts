import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {HeroService} from '../Heros-data/hero.service';
import {Hero} from '../Heros-data/hero';
import {Observable} from 'rxjs';
const log = console.log.bind(console, 'crisis-detail-component')
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    hero$: Observable<Hero>
  // 通常，你会直接写一个构造函数，让 Angular 把组件所需的服务注入进来
  // 自动定义同名的私有变量，并把它们存进去
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  gotoHeroes(hero) {
      let heroId = hero ? hero.id : null
      this.router.navigate(['/heroes',{id: heroId, foo: 'foo'}])
  }

  ngOnInit() {
      // 为什么子组件的双向绑定到了父组件也能生效？
      // 目前的理解是，this.hero$ 是一个指针，指向 HEROES 中的一个值
      // 所以当 this.hero$ 改变的时候，HEROES 对应的那个值也会跟着改变
      // 而父组件（crisis-list）渲染的数据来源来自 HEROES，所以会渲染修改后的最新数据
      this.hero$ = this.route.paramMap.pipe(
        // 你可能想使用 RxJS 的 map 操作符。 但 HeroService 返回的是一个 Observable<Hero>
        // 所以你要改用 switchMap 操作符来打平这个 Observable。
        switchMap((params: ParamMap) =>{
          log('getAll(name)', params.getAll('id'))
            return this.service.getHero(params.get('id'))}
          )
      )

      // 简化方法，使用 snapshot 获取路由参数的初始值
      // let id = this.route.snapshot.paramMap.get('id');
      // this.hero$ = this.service.getHero(id)
  }

}
