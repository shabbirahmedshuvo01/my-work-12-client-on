import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import SectionOne from '../SectionOne/SectionOne';
import SectionTow from '../SectionTow/SectionTow';
import Summery from '../Summery/Summery';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <SectionOne></SectionOne>
            <SectionTow></SectionTow>
            <Summery></Summery>
        </div>
    );
};

export default Home;