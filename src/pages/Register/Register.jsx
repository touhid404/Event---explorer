import { Link } from 'react-router';
import Alert from '../../components/Alert/Alert';
import { use, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { FaEye  } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const [show,SetShow]= useState(false);



  const {createUser,loginWithGoogle,updateUserProfile} = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoURL.value;
    const password = form.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      Alert('error','Password must be include an uppercase letters');
      return;
    }
    if (!hasLowercase) {
      Alert('error','Password must be include an lowercase letters');
      return;
    }
    if (!isLongEnough) {
      Alert('error','Password must be at least 6 characters');
      return;
    }
    createUser(email,password).then(()=>{
      updateUserProfile({
        
          displayName :  name,
            photoURL : photoUrl
      }).then(()=>{
        Alert('success','Account created successfully');


      }).catch(()=>{
        Alert('error','Something wrong to update profile picture or name');

      })


    }).catch(()=>{
      Alert('error','Something wrong to create account');

    })
    


    console.log({ name, email, photoUrl, password });
  };

  const handleGoogleLogIn=()=>{
    loginWithGoogle().then(()=>{
      Alert('success', 'Google log in successful');

    }).catch(()=>{
      Alert('error','Something wrong to create account');
    })

  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-blue-50 shadow-md w-full max-w-md border border-gray-300">
      <Helmet>
                <title>Register page  | Event Explorer</title>
         </Helmet>
         
        <h2 className="text-2xl font-semibold text-center mb-6">
          CREATE AN ACCOUNT NOW
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          <div className='relative'>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
             <p
              onClick={()=>SetShow(!show)}
              className='absolute bottom-3 right-3'>
           
            {
                show ? <FaEyeSlash  className='text-gray-500' /> : <FaEye className='text-gray-500' />
            }
            </p>
          </div>


          <button
            type="submit"
            className="w-full bg-black text-white py-2 hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>

        <button onClick={handleGoogleLogIn} className="btn mt-5 w-full bg-white text-black rounded-none">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Register with Google
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <span className="text-blue-400">
            <Link to="/auth/login" className="hover:underline">
              Login here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
