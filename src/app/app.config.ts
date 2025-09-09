import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';

import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';

import { environment } from '../environments/environment';

import { appRoutingProviders } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    ...appRoutingProviders,
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideStore(
      [],
      {
        developmentMode: !environment.production,
      },
      withNgxsReduxDevtoolsPlugin({
        disabled: environment.production,
      }),
    ),
  ],
};
