import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { PRODUCTS } from '../data/products';
import '../styles/custom-styles.css';

const product = PRODUCTS[0];

export const ProductPage = () => {

  return (
    <>
      <h1>Shopping Store</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'fit-content'
      }}>
        <ProductCard 
          key={product.id}
          product={ product }
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        >
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </>
  )
}
