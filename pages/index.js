import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';

export default function Home() {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is an amazing product',
      image: '/download.webp',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is another great product',
      image: '/product2.webp',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Don’t miss out on this one!',
      image: '/product3.webp',
    },
  ];

  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  );
}
