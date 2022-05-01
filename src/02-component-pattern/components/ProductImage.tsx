import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {
    let srcImage = '';

    if(img) {
        srcImage = img;
    } else {
        srcImage = noImage
    }

    return (
        <>
            <img className={styles.productImg} src={ srcImage } alt="coffe mug" />
        </>
    )
}

