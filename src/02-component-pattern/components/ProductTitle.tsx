import styles from '../styles/styles.module.css';
import { useContext } from 'react';
import { createProductContext } from './ProductCard';

export interface Props {
  title?: string;
  className?: string; 
}

export const ProductTitle = ({ title, className } : Props) => {
  const { product } = useContext(createProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`}>{ title ? title : product.title}</span>
  )
}
