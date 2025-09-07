type MainPageRoutingPath = 'main';

type CoreRoutingPath = 'icons';

export type AppRouting = CoreRoutingPath | MainPageRoutingPath;

export const appRoutes: Record<
  AppRouting,
  {
    routerPath: string;
    fullPath?: string;
  }
> = {
  icons: {
    routerPath: 'icons',
  },

  // Main routing //
  main: { routerPath: 'main' },
};
