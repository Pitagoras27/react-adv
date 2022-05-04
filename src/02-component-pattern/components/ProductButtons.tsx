import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css'
import { createProductContext } from './ProductCard';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { count, handleCount } = useContext(createProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
        <button className={styles.buttonMinus} onClick={() => handleCount(-1)}> -1 </button>
        <div className={styles.countLabel}>{count}</div>
        <button className={styles.buttonAdd} onClick={() => handleCount(+1)}> +1 </button>
    </div>
  )
}
