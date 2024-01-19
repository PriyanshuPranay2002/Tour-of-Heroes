import { Component, NgModule, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterLink,
    RouterOutlet,
    MessagesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    HttpClient,InMemoryDataService,HeroService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Tour of Heroes';
  constructor() {
    const http = inject(HttpClientModule);
  }
}