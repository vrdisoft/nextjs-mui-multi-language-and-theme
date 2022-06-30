import * as paths from "./paths";

type RouteType = {
  title: string;
  path: string;
  breadcrumbs: string[];
}

const routes: RouteType[] = [
  {
    title: "home",
    path: paths.HOME,
    breadcrumbs: [],
  },
  {
    title: "userSettings",
    path: paths.SETTINGS,
    breadcrumbs: [paths.HOME, paths.USER],
  },
  {
    title: "user",
    path: paths.USER,
    breadcrumbs: [paths.HOME],
  },
];

export function getRoute(path: string): RouteType {
  const currentRoute = routes.filter((item) => item.path === path)[0];
  return currentRoute;
}

export default routes;
