import { useContext } from 'react';
import styles from '../styles/styles.module.css'
import { createProductContext } from './ProductCard';

interface Props {
  className?: string;
}

export const ProductButtons = ({ className }: Props) => {
  const { count, handleCount } = useContext(createProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
        <button className={styles.buttonMinus} onClick={() => handleCount(-1)}> -1 </button>
        <div className={styles.countLabel}>{count}</div>
        <button className={styles.buttonAdd} onClick={() => handleCount(+1)}> +1 </button>
    </div>
  )
}
