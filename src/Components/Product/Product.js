import React from 'react';
import DealOfDay from './DealOfDay/DealOfDay';
import HotItem from './HotItem/HotItem';
import MensBanner from './MensBanner/MensBanner';
import ProductDetails from './ProductDetails/ProductDetails';
import Trending from './Trending/Trending';

const Product = () => {
    return (
        <div>
            <div>
                <Trending></Trending>
            </div>
            <section className="midium-banner">
                <MensBanner></MensBanner>
            </section>
            <div>
                <HotItem></HotItem>
            </div>
            <section className="cown-down">
                <DealOfDay></DealOfDay>
            </section>
            <div>
                <ProductDetails></ProductDetails>
            </div>
        </div>

    );
};

export default Product;