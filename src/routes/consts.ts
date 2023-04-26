import AboutMe from "../pages/AboutMe/AboutMe";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home";
import Layout from "../layouts/Layout";
import { MainLayoutRoutes } from "./routeTypes";
import MyProjects from "../pages/MyProjects/MyProjects";

export const HOME_PATH = "/";
export const MY_PROJECTS_PATH = "/projects";
export const ABOUT_ME_PATH = "/about";
export const CONTACT_ME_PATH = "/contacts";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: Layout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: MY_PROJECTS_PATH, Component: MyProjects },
    { path: ABOUT_ME_PATH, Component: AboutMe },
    { path: CONTACT_ME_PATH, Component: Contacts },
  ],
};
