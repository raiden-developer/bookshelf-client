import { Landing, Auth, NotFound } from "../pages";

export const routes = [
  {
    path: "/",
    component: Landing,
    auth: false,
  },
  {
    path: "/auth",
    component: Auth,
    auth: false,
  },
  {
    path: "*",
    component: NotFound,
    auth: false,
  },
];
