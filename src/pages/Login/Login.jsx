import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import Alert from '../../components/Alert/Alert';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { signInUser, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailInput = form.email.value;
    const password = form.password.value;

    setEmail(emailInput); 
    signInUser(emailInput, password)
      .then(() => {
        Alert('success', 'Log in successful');
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Alert('error', error);
      });
  };

  const handleGoogleLogIn = () => {
    loginWithGoogle()
      .then(() => {
        Alert('success', 'Google log in successful');
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Alert('error', 'Something went wrong while creating the account');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-blue-50 shadow-md w-full max-w-md border border-gray-300">
         <Helmet>
                <title>Log in page | Event Explorer</title>
         </Helmet>
                      
        <h2 className="text-2xl font-semibold text-center mb-6">
          LOGIN YOUR ACCOUNT
        </h2>
        <form className="space-y-5" onSubmit={handleLogIn}>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 hover:bg-gray-900 transition"
          >
            Log in
          </button>
        </form>

       
        <button 
         onClick={handleGoogleLogIn}
           className="btn mt-6 w-full bg-white text-black border-[#e5e5e5]">
             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
           Login with Google
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <span className="text-blue-400">
            <Link to="/auth/register" className="hover:underline">
              Register here
            </Link>
          </span>
        </p>

        <p className="text-center mt-4 text-sm text-gray-600">
          Forget your password?{" "}
          <span className="text-blue-400">
            <Link to="/auth/forgetPassword" state={{ email }} className="hover:underline">
              Reset now
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
