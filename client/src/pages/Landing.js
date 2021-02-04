import React from 'react';
import ProductList from '../components/ProductList';
import BrandMenu from '../components/BrandMenu';
import Cart from '../components/Cart';
import GridList from '../components/GridList';


const Landing = () => {

    return (
        <div className='home'>
            <h1>Landing.js</h1>
            <BrandMenu />
            <GridList />
            <ProductList />
            <Cart /> 
        </div>
    );
};

export default Landing;