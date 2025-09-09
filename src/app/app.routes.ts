import { provideRouter, Routes } from '@angular/router';

import { appRoutes } from '@core/constants';

import { environment } from '../environments/environment';

const baseRoutes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (c) => c.HomePageComponent,
      ),
  },
  {
    path: appRoutes.files.routerPath,
    loadComponent: () =>
      import('./pages/files-page/files-page.component').then(
        (c) => c.FilesPageComponent,
      ),
  },
  {
    path: appRoutes.edit.routerPath,
    loadComponent: () =>
      import('./pages/edit-page/edit-page.component').then(
        (c) => c.EditPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
] as Routes;

export const routes: Routes = environment.production
  ? baseRoutes
  : [...baseRoutes];

export const appRoutingProviders = [provideRouter(routes)];
