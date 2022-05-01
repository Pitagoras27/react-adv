import { ProductCard } from '../components/ProductCard';

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
          <ProductCard.Image />
          <ProductCard.Title title=''/>
          <ProductCard.Buttons count={0} handleCount={function (val: number): void {
            throw new Error('Function not implemented.');
          } } />
        </ProductCard>
      </div>
    </>
  )
}
