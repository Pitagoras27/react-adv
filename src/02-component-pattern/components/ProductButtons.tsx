import { CSSProperties, useCallback, useContext, useRef } from 'react';
import styles from '../styles/styles.module.css'
import { createProductContext } from './ProductCard';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { count, maxCount, handleCount } = useContext(createProductContext);  
  const isActive = useRef(false);
 
  // !!maxCount && counter === maxCount
  const isMaxReached = useCallback((val) => {
    handleCount(val);

    if(maxCount) {
      isActive.current = (count + val) >= maxCount
    }
    
  }, [count, maxCount]);
  
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
        <button
          className={styles.buttonMinus}
          onClick={() => isMaxReached(-1)}>
            -1
        </button>

        <div className={styles.countLabel}>{count}</div>

        <button
          className={`${styles.buttonAdd} ${isActive.current ? styles.disabled : ''}`}
          disabled={isActive.current}
          onClick={() => isMaxReached(+1)}>
            +1
        </button>
    </div>
  )
}
