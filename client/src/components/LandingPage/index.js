import React from 'react';
import ProductList from '../ProductList';
import BrandMenu from '../BrandMenu';
import GridList from '../GridList';
import './style.css';

const LandingPage = () => {

    return (
        <div className='home center'>
            <BrandMenu />
            <GridList />
            <ProductList />
        </div>
    );
};

export default LandingPage;