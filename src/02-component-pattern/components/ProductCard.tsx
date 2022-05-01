import { ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitile';

interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
}

interface Product {
    id: string;
    title: string; 
    img?: string;
}

export const ProductCard = ({ product, children }: Props) => {

    const { count, handleCount } = useProduct(0);

    return (
        <>
        
            <div className={styles.productCard}>
                { children }
            </div>
        </>
    )
}

ProductCard.Buttons = ProductButtons;
ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
