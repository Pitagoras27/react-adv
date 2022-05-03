import styles from '../styles/styles.module.css';
import { useContext } from 'react';
import { createProductContext } from './ProductCard';

export const ProductTitle = ({ title } : { title?: string}) => {
  const { product } = useContext(createProductContext);

  return (
    <span className={styles.productDescription}>{ title ? title : product.title}</span>
  )
}
