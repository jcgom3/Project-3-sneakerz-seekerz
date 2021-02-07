import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import ProductItem from '../ProductItem';

function ProductList() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const { currentBrand } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    // if there's data to be stored
    if (data) {
      // let's store it in the global state object
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      // take each product and save it to IndexedDB using the helper function
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
      // check if `loading` is undefined in `useQuery()` Hook
    } else if (!loading) {
      // when offline, get all of the data from the `products` store
      idbPromise('products', 'get').then((products) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentBrand) {
      return state.products;
    }
    return state.products.filter(
      (product) => product.brand._id === currentBrand
    );
  }

  return (
    <div id='product-list' className="my-2">
    {state.products.length ? (
      <div className="flex-row">
        {filterProducts().map((product) => (
          <ProductItem
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    ) : (
      <h3>You haven't added any products yet!</h3>
    )}
    </div>
  );
}

export default ProductList;