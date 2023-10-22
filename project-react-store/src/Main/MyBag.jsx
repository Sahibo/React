import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function MyBag() {
  let dispatch = useDispatch();
  const basketArr = useSelector((state) => state.products.basketArr);
    console.log(basketArr);

    const increaseQuantity = (product) => {
        // Dispatch an action to increase the quantity of the product
        // You need to implement this action in your reducer
      };
    
      const decreaseQuantity = (product) => {
        // Dispatch an action to decrease the quantity of the product
        // You need to implement this action in your reducer
      };
    
      const removeProduct = (product) => {
        // Dispatch an action to remove the product from the cart
        // You need to implement this action in your reducer
      };
  return (
    <div>
    {Array.isArray(basketArr) && basketArr.length > 0 ? (
      <div className="products-list">
        {basketArr.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-img-container">
                <img src="https://cdn2.jysk.com/getimage/wd2.medium/202326" className="product-img"></img>
            </div>
            <div className="product-info-container">
              <p>Name: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => increaseQuantity(product)}>+</button>
              <button onClick={() => decreaseQuantity(product)}>-</button>
              <button onClick={() => removeProduct(product)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    ) : <p>Your bag is empty</p>}
  </div>
  );
}
