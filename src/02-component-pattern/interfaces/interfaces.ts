import { Props as ProductProps } from "../components/ProductCard";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ContextProps {
  product: Product;
  count: number;
  handleCount: (val: number) => void;
}

// export interface IProductCardHOC {
//   ({ product, children }: ProductProps): JSX.Element;
//   Title: ({ title }: { title?: string }) => JSX.Element;
//   Image: ({ img }: { img?: string }) => JSX.Element;
//   Buttons: ({ className }: { className?: string }) => JSX.Element;
// }
