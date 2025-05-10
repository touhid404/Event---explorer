import React from 'react';
import { useLoaderData } from 'react-router';
import Events from '../../components/Events/Events';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    const events = useLoaderData();
    return (
       <div className="">

        <Slider ></Slider>
    
        <Events events={events}></Events>

       </div>
 
    );
};

export default Home;