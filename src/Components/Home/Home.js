import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import SectionOne from '../SectionOne/SectionOne';
import SectionTow from '../SectionTow/SectionTow';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <SectionOne></SectionOne>
            <SectionTow></SectionTow>
        </div>
    );
};

export default Home;