import React from 'react';

const FeedBackCard = ({ feedback }) => {
  return (
    <div className="inline-block mx-4 p-6 bg-white border border-gray-200 shadow-xl  w-[300px] h-[200px] hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={feedback.image}
          alt={feedback.name}
          className="w-12 h-12  object-cover border border-gray-300"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-900">{feedback.name}</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500 text-sm">
              {"⭐".repeat(feedback.rating)}
            </span>
            <span className="text-gray-500 text-sm">({feedback.rating})</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{feedback.review}</p>
    </div>
  );
};

export default FeedBackCard;
