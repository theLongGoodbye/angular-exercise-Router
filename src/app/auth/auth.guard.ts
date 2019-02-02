import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, NavigationExtras} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../admin/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //  ActivatedRouteSnapshot 包含了即将被激活的路由
    let url = state.url
    console.log('url', url);
    console.log('AuthGuard#canActivate called');
    return this.checkLogin(url)
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    //注册了，返回 true,直接去 state.url 这个 url
    if(this.authService.isLoggedIn) {return true}
    //没注册，把要去的链接先保存起来
    this.authService.redirectUrl = url

    let sessionId = 123

    let navigetionExtras: NavigationExtras = {
      queryParams: {'session_id': sessionId},
      fragment: 'anchor',
    }

    //然后跳转到注册页面
    this.router.navigate(['/login'], navigetionExtras)
    //返回 false,路由将不会跳转
    return false
  }

}
