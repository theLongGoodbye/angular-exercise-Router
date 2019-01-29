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
