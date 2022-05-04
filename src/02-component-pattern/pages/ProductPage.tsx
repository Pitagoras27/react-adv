  import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe-mug',
  img: './coffee-mug.png'
}

export const ProductPage = () => {
  return (
    <>
      <h1>Shopping Store</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard 
          product={ product }
          className="bg-dark text-white">

          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold"/>
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={ product }
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={ product }
          style={{
              backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{
              display: 'flex',
              justifyContent: 'end'
          }}/>
        </ProductCard>
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </>
  )
}
