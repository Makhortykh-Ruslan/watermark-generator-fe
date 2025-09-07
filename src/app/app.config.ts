import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { appRoutingProviders } from './app.routes';
import { provideStore } from '@ngxs/store';
import { environment } from '../environments/environment';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';

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
