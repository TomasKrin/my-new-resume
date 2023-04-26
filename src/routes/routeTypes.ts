import { PropsWithChildren } from "react";

type MainRoute = {
  path: "/" | "/projects" | "/about" | "/contacts";
  Component: () => JSX.Element;
};

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: MainRoute[];
};
