import { Routes } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component'
import { HeroesComponent} from './heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
    {
        component:DashboardComponent,
        path:'dashboard'
    },
    {
        component:HeroesComponent,
        path:'heroes'
    },
    { path: 'detail/:id', component: HeroDetailComponent }

];
