import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface IRoutes {
  to: string;
  path: string;
  name: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy01 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const Lazy02 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
const Lazy03 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: IRoutes[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    name: "Lazy-1",
    component: Lazy01,
  },
  {
    to: "/lazy2",
    path: "lazy2",
    name: "Lazy-2",
    component: Lazy02,
  },
  {
    to: "/lazy3",
    path: "lazy3",
    name: "Lazy-3",
    component: Lazy03,
  },
];
