import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ContextProps, Props as PropsProductCard,  } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitile';

export const createProductContext = createContext({} as ContextProps);
const { Provider } = createProductContext 

export const ProductCard = ({ product, children }: PropsProductCard) => {

    const { count, handleCount } = useProduct(0);

    return (
        <Provider value={{
            product,
            count,
            handleCount
        }}>
            <div className={styles.productCard}>
                { children }
            </div>
        </Provider>
    )
}

ProductCard.Buttons = ProductButtons;
ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
