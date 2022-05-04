import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { CSSProperties, useContext } from 'react';
import { createProductContext } from './ProductCard';

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties ;
}

export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useContext(createProductContext);

    let srcImage = '';

    if(img) {
        srcImage = img;
    } else if (product.img) {
        srcImage = product.img
    } else {
        srcImage = noImage
    }

    return (
        <>
            <img
                className={`${styles.productImg} ${className}`}
                src={ srcImage } alt="coffe mug" style={style}
            />
        </>
    )
}

