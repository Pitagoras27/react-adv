import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
    ContextProps,
    IInitialValue,
    IOnChangeArgs,
    Product,
    ProductCardHandlers
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => ReactElement;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
    initialValues?: IInitialValue;
}

export const createProductContext = createContext({} as ContextProps);
const { Provider } = createProductContext 

export const ProductCard = ({
    product,
    children,
    className,
    style,
    onChange,value,
    initialValues
}: Props) => {

    const {
        count,
        maxCount,
        isMaxCountReached,
        handleCount,
        reset
    } = useProduct({onChange, product, value, initialValues});

    return (
        <Provider value={{
            product,
            count,
            maxCount,
            handleCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {
                    children({
                        count,
                        isMaxCountReached,
                        maxCount,
                        product,
                        handleCount,
                        reset,
                    })
                }
            </div>
        </Provider>
    )
}

