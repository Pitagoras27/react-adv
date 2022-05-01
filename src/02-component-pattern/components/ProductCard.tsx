import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitile';

interface Props {
    product: Product,
}

interface Product {
    id: string;
    title: string; 
    img?: string;
}

export const ProductCard = ({ product }: Props) => {

    const { count, handleCount } = useProduct(0);

    return (
        <>
        
            <div className={styles.productCard}>
                <ProductImage img={product.img}/>
                <ProductTitle title={ product.title }/>            
                <ProductButtons count={count} handleCount={handleCount} />
            </div>
        </>
    )
}
