import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '🏡', component: HomeComponent },
  { path: 'settings', component: SettingsComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(routes)]
};
