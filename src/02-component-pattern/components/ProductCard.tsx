import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: () => void;
}

export const createProductContext = createContext({} as ContextProps);
const { Provider } = createProductContext 

export const ProductCard = ({ product, children, className, style, onChange }: Props) => {

    const { count, handleCount } = useProduct(onChange);

    return (
        <Provider value={{
            product,
            count,
            handleCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                { children }
            </div>
        </Provider>
    )
}

