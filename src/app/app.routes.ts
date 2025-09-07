import { provideRouter, Routes } from '@angular/router';

import { environment } from '../environments/environment';

const baseRoutes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.routing').then((r) => r.MAIN_ROUTING),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
] as Routes;

export const routes: Routes = environment.production ? baseRoutes : [...baseRoutes];

export const appRoutingProviders = [provideRouter(routes)];
