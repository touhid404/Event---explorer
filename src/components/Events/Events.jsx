import React from 'react';
import Event from '../Event/Event';
import { Helmet } from 'react-helmet-async';

const Events = ({ events }) => {
    return (
        <div className="py-10">
            
            <Helmet>
        <title>Upcoming Events | Event Explorer</title>
              </Helmet>
            <h1 className="text-2xl md:text-4xl font-extrabold mb-8">UP COMING EVENTS</h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-14 ">
                {events.map((singleEvent) => (
                    <Event key={singleEvent.id} singleEvent={singleEvent} />
                ))}
            </div>
        </div>
    );
};

export default Events;
