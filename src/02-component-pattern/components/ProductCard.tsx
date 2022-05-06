import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ContextProps, IOnChangeArgs, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
}

export const createProductContext = createContext({} as ContextProps);
const { Provider } = createProductContext 

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {

    const { count, handleCount } = useProduct({onChange, product, value});

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

