import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from '../assets/spinner.gif'

import { UPDATE_PRODUCTS, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, ADD_TO_CART } from '../utils/actions';

import Cart from "../components/Cart";

import { idbPromise } from "../utils/helpers";

import { useDispatch, useSelector } from 'react-redux';

function Detail() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const [currentProduct, setCurrentProduct] = useState({})
  
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  
  const { products, cart } = state;
  
  useEffect(() => {
    // data already in the global state
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } else if (data) {
      // retrieve data from the server
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
      // and store that data in IndexedDB
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    // if the user is offline, use the cached data in IndexedDB
    } else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);

    // if the product is already in the cart, update the quantity instead of adding duplicate items
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      // and also store in IndexedDB
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    // if the product is not yet in the cart, add it
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });
      // and also store in IndexedDB
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    // remove the product from the cart
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id
    });
    // update IndexedDB to reflect the deleted product
    idbPromise('cart', 'delete', { ...currentProduct })
  };

  return (
    <>
      {currentProduct ? (
        <div className="container my-1">
          <Link to="/">
            ← Back to Products
          </Link>

          <h2>{currentProduct.name}</h2>

          <p>
            {currentProduct.description}
          </p>

          <p>
            <strong>Price:</strong>
            ${currentProduct.price}
            {" "}
            <button onClick={addToCart}>
              Add to Cart
            </button>
            <button 
              disabled={!cart.find(p => p._id === currentProduct._id)} 
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {
        loading ? <img src={spinner} alt="loading" /> : null
      }
      <Cart />
    </>
  );
};

export default Detail;