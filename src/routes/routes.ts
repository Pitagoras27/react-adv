import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface IRoutes {
  to: string;
  path: string;
  name: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);
const NotLazy = lazy(
  () => import(/* webpackChunkName: "NotLazy" */ "../01-lazyload/pages/NotLazy")
);

export const routes: IRoutes[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    name: "LazyLayout",
    component: LazyLayout,
  },
  {
    to: "/not-lazy",
    path: "not-lazy",
    name: "NotLazy visible",
    component: NotLazy,
  },
];
