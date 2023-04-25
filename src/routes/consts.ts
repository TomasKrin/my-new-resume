import Home from "../pages/Home/Home";
import Layout from "../layouts/Layout";
import { MainLayoutRoutes } from "./routeTypes";
import MyProjects from "../pages/MyProjects/MyProjects";

export const HOME_PATH = "/";
export const MY_PROJECTS_PATH = "/projects";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: Layout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: MY_PROJECTS_PATH, Component: MyProjects },
  ],
};
