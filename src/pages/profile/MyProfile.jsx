import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import Alert from '../../components/Alert/Alert';
import { useLocation, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  


  const { user,updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleUpdate =  (e) => {
    e.preventDefault();

    updateUserProfile({
      displayName: name,
        photoURL: photoURL
    }).then(()=>{
      Alert('success', 'Profile updated successfully!');
      navigate(`${location.state ? location.state : "/"}`);

    })
    .catch ((error)=> {
      Alert('error', error.message || 'Update failed');
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 shadow-lg max-w-md w-full rounded">
        <h2 className="text-2xl font-bold mb-6 text-center ">MY PROFILE</h2>
        
         <Helmet>
                <title>My Profile | Event Explorer</title>
          </Helmet>

        <div className="flex flex-col items-center">
          <img
            src={photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24  object-cover border-2 border-gray-300 mb-4"
          />
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 focus:outline-none focus:ring"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="w-full border px-3 py-2 focus:outline-none focus:ring"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 bg-gray-100 cursor-not-allowed"
              value={user?.email || ''}
              disabled
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
