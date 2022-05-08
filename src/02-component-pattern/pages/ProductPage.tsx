import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { PRODUCTS } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ProductPage = () => {
  const {  shoppingCard, onProductChange  } = useShoppingCart()

  return (
    <>
      <h1>Shopping Store</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'fit-content'
      }}>

        {
          PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id}
              product={ product }
              className="bg-dark text-white"
              onChange={onProductChange}
              value={shoppingCard[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }

        <div className='shopping-card'>
          { Object.entries( shoppingCard ).map(([key, product]) => (
            <ProductCard
              key={key}
              product={ product }
              className="bg-dark text-white"
              style={{
                width: '100px'
              }}
              onChange={onProductChange}
              value={product.count}
            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          )) }
        </div>
      </div>
    </>
  )
}
