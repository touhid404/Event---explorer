import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { format, parseISO } from 'date-fns';
import Alert from '../../components/Alert/Alert';
import { Helmet } from 'react-helmet-async';
import ErrorPage from '../ErrorPage/ErrorPage';

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState(null);
  const { id } = useParams();
  const eventsData = useLoaderData();

  useEffect(() => {
    const singleEventData = eventsData.find(event => event.id === id);
    setEventDetails(singleEventData);
  }, [eventsData, id]);

  if (!eventDetails) {
    return <ErrorPage></ErrorPage>
  }

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
  
    if (name.length > 0 && email.length > 0) {
      Alert('success', 'Booking successful');
    } else {
      Alert('error', 'Please fill out both name and email fields');
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
       <Helmet>
              <title>{eventDetails.name} | Event Explorer</title>
                    </Helmet>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <img
            src={eventDetails.thumbnail}
            alt={eventDetails.name}
            className="shadow-md w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-bold"><span className="font-semibold italic">Event name :</span> {eventDetails.name}</p>
            <p className="text-lg"><span className="font-semibold italic ">Location :</span> {eventDetails.location}</p>
            <p className="text-lg"><span className="font-semibold italic">Category :</span> {eventDetails.category}</p>
            <p className="text-lg"><span className="font-semibold italic">Event Date :</span> {format(parseISO(eventDetails.date), 'MMMM d, yyyy')}</p>
            <p className="text-lg"><span className="font-semibold italic">Entry Fee :</span> {eventDetails.entry_fee ? `${eventDetails.entry_fee} TK` : 'Free'}</p>
            <p className="text-md text-gray-700 text-justify"><span className="font-semibold italic">Description :</span> {eventDetails.description}</p>
          </div>

          <div className="bg-white border border-gray-200  p-6 shadow-md mx-2 md:mx-5">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">RESERVE A SEAT NOW </h3>

            <form className="space-y-4" onSubmit={handleBooking}>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input
                  id="name"
                  name='name'
                  type="text"
                  className="w-full input input-bordered rounded-none"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  name='email'
                  type="email"
                  className="w-full input input-bordered rounded-none"
                  placeholder="Your Email"
                  required
                />
              </div>

              <button
                type="submit"
                
                className="btn btn-neutral w-full mt-2 rounded-none"
              >
                Reserve
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
