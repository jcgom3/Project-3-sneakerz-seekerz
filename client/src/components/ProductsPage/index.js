import React from 'react';
import ProductList from '../ProductList';
import BrandMenu from '../BrandMenu';

const ProductsPage = () => {

    return (
        <div className='home center'>
            <BrandMenu />
            <ProductList />
        </div>
    );
};

export default ProductsPage;