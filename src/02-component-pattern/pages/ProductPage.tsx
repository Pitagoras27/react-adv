import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';
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
        {/** TODO: Add interfaces */}
        {/* <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="text-white" />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard> */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttoms" />
        </ProductCard>
      </div>
    </>
  )
}
