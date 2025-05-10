import React from 'react';
import { Link } from 'react-router';
import { format, parseISO } from 'date-fns';

const Event = ({ singleEvent }) => {
    const { id, name, thumbnail, date } = singleEvent;

    return (
        <div className="bg-white shadow-md  overflow-hidden">
            <img 
                src={thumbnail} 
                alt={name} 
                className="w-full h-80 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Event Date: {format(parseISO(date), 'MMMM d, yyyy')}
                </p>
                <Link 
                    to={`eventdetails/${id}`} 
                    className="inline-block px-4 py-2 bg-black text-white font-medium text-sm  hover:bg-blue-400 transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default Event;
