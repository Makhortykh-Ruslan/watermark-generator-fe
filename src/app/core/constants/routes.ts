type MainPageRoutingPath = 'files' | 'edit';

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

  files: { routerPath: 'files' },
  edit: { routerPath: 'edit' },
};
