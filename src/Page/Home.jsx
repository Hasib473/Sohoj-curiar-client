import React from 'react';
import Banner from '../Component/Home/Banner';
import HowWork from '../Component/Home/HowWork';
import Covarege from '../Component/Home/Covarege';



const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <div className='mt-10'>
                <HowWork/>
            </div>
            <div className='mt-10'>
                <Covarege/>
            </div>
           
        </div>
    );
};

export default Home;