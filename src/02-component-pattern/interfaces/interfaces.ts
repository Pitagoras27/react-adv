import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

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

export interface IProductCardHOC {
  ({ product, children }: ProductProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface IOnChangeArgs {
  count: number;
  product: Product;
}

export interface ProductInCart extends Product {
  count: number
}
