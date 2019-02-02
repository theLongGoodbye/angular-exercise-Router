import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroListComponent} from './heroes/hero-list/hero-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';

const appRoutes: Routes = [
  //{path: 'crisis-center', component: CrisisListComponent},
  // {path: 'heroes', component: CrisisListComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'}
]


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
