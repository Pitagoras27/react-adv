import { ReactElement } from "react";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

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
