import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BRANDS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';
import {
  UPDATE_BRANDS,
  UPDATE_CURRENT_BRAND,
} from '../../utils/actions';

function BrandMenu() {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { brands } = state;

  const { loading, data: brandData } = useQuery(QUERY_BRANDS);

  useEffect(() => {
    // if brandData exists or has changed from the response of useQuery, then run dispatch()
    if (brandData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for brands to
      dispatch({
        type: UPDATE_BRANDS,
        brands: brandData.brands,
      });
      brandData.brands.forEach((brand) => {
        idbPromise('brands', 'put', brand);
      });
    } else if (!loading) {
      idbPromise('brands', 'get').then((brands) => {
        dispatch({
          type: UPDATE_BRANDS,
          brands: brands,
        });
      });
    }
  }, [brandData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_BRAND,
      currentBrand: id,
    });
  };

  return (
    <div>
      <h2>Choose a Brand:</h2>
      {brands.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default BrandMenu;