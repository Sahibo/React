import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
      <AddToCartButton onClick={() => onAddToCart(product)}>Add to card</AddToCartButton>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 300px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  font-size: 20px;
  margin: 8px 0;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  margin: 8px 0;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
