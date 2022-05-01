import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitile';

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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title=''/>
          <ProductButtons count={0} handleCount={function (val: number): void {
            throw new Error('Function not implemented.');
          } } />
        </ProductCard>

      </div>
    </>
  )
}
