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

