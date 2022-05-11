import { CSSProperties, useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css'
import { createProductContext } from './ProductCard';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { count, maxCount, handleCount } = useContext(createProductContext);  
 
  const isMaxReached = useCallback(() => (!!maxCount && count === maxCount), [count, maxCount]);
  
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
        <button
          className={styles.buttonMinus}
          onClick={() => handleCount(-1)}>
            -1
        </button>

        <div className={styles.countLabel}>{count}</div>

        <button
          className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}`}
          disabled={isMaxReached()}
          onClick={() => handleCount(+1)}>
            +1
        </button>
    </div>
  )
}
