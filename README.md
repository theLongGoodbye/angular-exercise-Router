# angular-exercise-Router

如果 app 文件夹是该应用的根目录，那就把 href 的值设置为： ``<base href="/">``
***
路由应用范例中默认不包含路由，可以用下列命令生成带路由的 NgModule：<br/>
ng generate module my-module --routing
***

#### 配置路由（app-routing.module.ts）

1.创建路由数组 appRoutes 描述如何进行导航：
```
const appRoutes: Routes = [
  {path: 'crisis-center', component: CrisisListComponent},
  {path: 'heroes', component: HeroListComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
]
```

2.将路由数组传给 RouterModule.forRoot 方法并传给本模块的 imports 数组就可以配置路由器
```
imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
  ],
```

3.把 Angular 的 RouterModule 添加到该模块的 exports 数组中，以便再次导出它 。 通过再次导出 RouterModule，当在 AppModule 中导入了 AppRoutingModule 之后，那些声明在 AppModule 中的组件就可以访问路由指令了，比如 RouterLink 和 RouterOutlet。
```
 exports: [
    RouterModule
  ],
```

***
在 heroes 目录下创建一个带路由的 HeroesModule，并把它注册进 AppModule 中
ng generate module heroes/heroes --module app --flat --routing
***
如果是在跟组件直接使用子组件（写了选择器标签），则要在特性模块中 导出 这个组件
如果是路由（通过 a 标签路由到某个组件），则不用在特性模块中导出
***
只在根模块 AppRoutingModule 中调用 RouterModule.forRoot（如果在 AppModule 中注册应用的顶级路由，那就在 AppModule 中调用）。 在其它模块中，你就必须调用RouterModule.forChild方法来注册附属路由。
***
#### 通过 url 传递和获取数据（heroes文件夹）
0. 路径设置 {path: 'hero/:id', component: HeroDetailComponent}
1. 在模板中放置路由标签 <a [routerLink]="['/hero', hero.id]">
2. 引入 ActivatedRoute 模块，调用下面的方法获取 url 里面的值
```
this.route.paramMap.pipe(
        // 你可能想使用 RxJS 的 map 操作符。 但 HeroService 返回的是一个 Observable<Hero>
        // 所以你要改用 switchMap 操作符来打平这个 Observable。
        switchMap((params: ParamMap) =>
          this.service.getHero(params.get('id')))
      )
```
3. 引入 Router 模块，使用 this.router.navigate(['/heroes',{id: heroId, foo: 'foo'}]) 导航到相应地址，并传参（这也是传多个参的方法）
4. 同样使用 this.route.paramMap.pipe() 方法来获取参数
***
当调用路由器的 navigateByUrl 时，总是要指定完整的绝对路径。

***
#### 多重路由/命名路由-compose-message文件夹
http://localhost:4200/heroes(popup:compose) <br/>
1.crisis-center 是主导航。

2.圆括号包裹的部分是第二路由。

3.第二路由包括一个出口名称（popup）、一个冒号分隔符和第二路由的路径（compose）。
***
#### 总结特性模块的配置步骤
1.生成带 routing 模块的特性模块  ng g m XX --routing

2.在特性模块下生成组件，并在 routing 模块中配置 routes

3.将特性模块放入 app.module 的 imports 数组中，在定级模板中放置导航 a 标签以及路由出口 router-outlet
