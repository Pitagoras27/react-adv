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
        <ProductCard product={product} />

      </div>
    </>
  )
}
