import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ContextProps, Props as PropsProductCard,  } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

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

