import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Salmon',
    price: 10.99,
    image: 'https://avatars.mds.yandex.net/i?id=e126593b63b9f83c6d7cba41c469719bee44156b-9855607-images-thumbs&n=13',
  },
  {
    id: 2,
    name: 'Meat',
    price: 19.99,
    image: 'https://avatars.mds.yandex.net/i?id=9c396675722d0f7d57ecaa1c93140825f404ca51-9842828-images-thumbs&n=13',
  },
  {
    id: 3,
    name: 'Chicken',
    price: 5.99,
    image: 'https://avatars.mds.yandex.net/i?id=1f870faa19c64d798a861147a0ff5dc4e8b62990-9863899-images-thumbs&n=13',
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Ecommerce</h1>
      <AppContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </AppContainer>
      <h2>Card</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;