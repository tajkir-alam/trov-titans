import React, { useEffect, useState } from 'react';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../assets/gallery3.jpg'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import SingleShopProduct from './SingleShopProduct';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategory = () => {
    const [loadShopProduct, setLoadShopProduct] = useState([]);

    let nameIs = '';

    const categoryname = (nameAre) => {
        return nameIs = nameAre;
    }

    useEffect(() => {
        fetch(`https://trov-titans-server-data-tajkir-alam.vercel.app/shopbycategory?limit=2&categoryname=${nameIs}`)
            .then(res => res.json())
            .then(data => setLoadShopProduct(data));
    }, [])

    // loadShopProduct.map(ok => console.log(ok))

    return (
        <div className='custom-container'>
            <div className='text-center space-y-3 md:w-3/4 mb-6 mx-auto px-1 md:px-0'>
                <h1 className='text-3xl md:text-5xl font-semibold text-slate-800'>Grab Your Titans</h1>
                <p className='font-medium text-slate-600'>Lorem ipsum dolor sit, Dolorum mollitia similique odio esse aliquam assumenda facilis magnam accusantium iste.</p>
            </div>

            {/* ------------------------------------------------------------------- */}


            <Tabs>
                <TabList className='text-center text-[#e4132bd2] text-xl font-semibold divider'>
                    <Tab onClick={()=>categoryname('Marvel')}>Marvel</Tab>
                    <Tab onClick={()=>categoryname('StarWars')}>Transformers</Tab>
                    <Tab>Star Wars</Tab>
                </TabList>
                <TabPanel className='shadow-xl'>
                    <div className='grid lg:grid-cols-2 justify-center items-center'>
                        {
                            loadShopProduct.map(eachProduct => <SingleShopProduct key={eachProduct._id} eachProduct={eachProduct}></SingleShopProduct>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className='shadow-xl'>
                    <div className='grid lg:grid-cols-2 justify-center items-center'>
                        {
                            loadShopProduct.map(eachProduct => <SingleShopProduct key={eachProduct._id} eachProduct={eachProduct}></SingleShopProduct>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className='shadow-xl'>
                    <div>
                        <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                        is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                        Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                        attack by Bowser. She often plays the damsel in distress role within the series and
                        is the lead female. She is often portrayed as Mario's love interest and has appeared
                        in Super Princess Peach, where she is the main playable character.
                    </div>
                </TabPanel>
            </Tabs>




            {/* ------------------------------------------------------------------- */}







        </div>
    );
};

export default ShopByCategory;