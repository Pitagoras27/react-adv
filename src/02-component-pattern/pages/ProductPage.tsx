import { count } from 'console';
import { useState } from 'react';
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { IOnChangeArgs, Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe-mug',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffe-mug-meme',
  img: './coffee-mug2.png'
}

const PRODUCTS = [product, product2]

interface IShoppingCard extends Product {
  count: number;
}

export const ProductPage = () => {
  const [ shoppingCard, setShoppingCard ] = useState<{ [key: string]: IShoppingCard }>({
    '1': { ...product, count: 0},
    '2': { ...product2, count: 0}
  });

  const handleChangeProduct = ({count,  product}: IOnChangeArgs) => {
    setShoppingCard(oldProductCard => {
      if (count === 0) {
        const {[product.id]: toDelete, ...rest} = oldProductCard;
        return rest
      }

      return {
        ...oldProductCard,
        [product.id]: {...product, count}
      }
    })
  }

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
              onChange={handleChangeProduct}
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
              onChange={handleChangeProduct}
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
