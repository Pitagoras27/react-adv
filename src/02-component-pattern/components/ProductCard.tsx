import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
}

export const createProductContext = createContext({} as ContextProps);
const { Provider } = createProductContext 

export const ProductCard = ({ product, children, className }: Props) => {

    const { count, handleCount } = useProduct(0);

    return (
        <Provider value={{
            product,
            count,
            handleCount
        }}>
            <div className={`${styles.productCard} ${className}`}>
                { children }
            </div>
        </Provider>
    )
}

