import Marquee from 'react-fast-marquee';
import FeedBackCard from './FeedBackCard';
import { useLoaderData } from 'react-router';
import { use, useState } from 'react';
import { AuthContext } from './../../provider/AuthContext';
import Alert from './../../components/Alert/Alert';
import { Helmet } from 'react-helmet-async';

const Feedback = () => {
  const loadedFeedback = useLoaderData();
  const [feedBackData, setFeedBackData] = useState(loadedFeedback);

  const [review, setReview] = useState('');
  const [rating, setRating] = useState('5'); 


  const {user} = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      review,
      rating: parseInt(rating),
      name: user.displayName,
      image: user.photoURL
    };

    setFeedBackData((prevData) => [...prevData, newFeedback]);
    Alert('success','Thank you for your feedback')
    
    setReview('');
    setRating('5');
  };

  return (
    <div className="py-12 px-4">
       <Helmet>
              <title>Feedback Dashboard | Event Explorer</title>
       </Helmet>
       
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 mt-8 md:mt-12">
        WHAT OUR PARTICIPANTS ARE SAYING
      </h2>

      <div className="max-w-7xl mx-auto text-center">
  <Marquee speed={30} gradient={false} pauseOnHover={true}>
    {feedBackData.slice().reverse().map((feedback, index) => (
      <FeedBackCard key={index} feedback={feedback} />
    ))}
  </Marquee>
</div>

      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 mt-8 md:mt-12">
        GIVE YOUR FEEDBACK
      </h2>

      <div className="max-w-xl mx-auto mt-16 bg-white shadow-lg p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="review" className="block mb-1 font-medium text-gray-700">
              Your Review
            </label>
            <textarea
              id="review"
              name="review"
              placeholder="Write your review"
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border border-gray-300 p-2"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block mb-1 font-medium text-gray-700">
              Your Rating
            </label>
            <select
              id="rating"
              name="rating"
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full border border-gray-300 p-2"
            >
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
