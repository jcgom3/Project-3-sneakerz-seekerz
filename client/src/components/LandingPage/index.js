import React from 'react';
import ProductList from '../components/ProductList';
import BrandMenu from '../components/BrandMenu';
import Cart from '../components/Cart';

const Landing = () => {

    return (
        <div className='home'>
            <h1>Home</h1>
            <BrandMenu /> 
            <ProductList />
            <Cart /> 
        </div>
    );
};

export default Landing;