import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { useContext } from 'react';
import { createProductContext } from './ProductCard';

export const ProductImage = ({ img = '' }) => {
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
            <img className={styles.productImg} src={ srcImage } alt="coffe mug" />
        </>
    )
}

