import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import "@angular/compiler"
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {AppRoutingModule} from './app/app-routing.module'
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { routes } from './app/app.routes';
import { InMemoryDataService } from './app/in-memory-data.service';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './app/in-memory-data.service';
// HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false });

bootstrapApplication(AppComponent, {
  providers: [
      provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
      provideHttpClient(withFetch()),
      importProvidersFrom(
          HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
              dataEncapsulation: false,
          })
      ),
  ],
});
