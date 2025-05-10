import React, { use, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import Alert from '../../components/Alert/Alert';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
  const { resetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);
  

  const handleReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    resetPassword(email)
      .then(() => {
        Alert('success', 'Password reset link sent to your email');
        navigate('/auth/login');
      })
      .catch((error) => {
        Alert('error', error.message || 'Failed to send reset email');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-blue-50 shadow-md w-full max-w-md border border-gray-300">
      <Helmet>
                <title>Forget Password page | Event Explorer</title>
                
         </Helmet>
        <h2 className="text-2xl font-semibold text-center mb-6">
          FORGOT PASSWORD
        </h2>
        <form className="space-y-5" onSubmit={handleReset}>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              defaultValue={email}
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 hover:bg-gray-900 transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Remembered your password?{' '}
          <span className="text-blue-400">
            <Link to="/auth/login" className="hover:underline">
              Log in here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
