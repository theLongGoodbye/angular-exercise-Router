

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { AppRoutingModule } from './app-routing.module';

import{HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ReactiveFormsModule } from '@angular/forms';
import {Router, RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CrisesModule} from './crisis-center/crises.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeroesModule,
    CrisesModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  entryComponents: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
