import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import ExtraSection from '../ExtraSection/ExtraSection';
import useTitle from '../../../hooks/useTitle';
import OurStory from '../OurStory/OurStory';
import WhyUs from '../WhyUs/WhyUs';
import OurImpact from '../OurImpact/OurImpact';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <OurStory></OurStory>
            <WhyUs></WhyUs>
            <ExtraSection></ExtraSection>
            <OurImpact></OurImpact>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;