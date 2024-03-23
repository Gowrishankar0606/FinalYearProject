import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState(''); // State for date of birth

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setDob(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden"> {/* Added overflow-hidden class */}
      <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4  h-3/5  sm:w-2/5 md:w-1/2 lg:w-1/3 xl:w-1/3">
        <div className="text-center text-green-500 text-3xl mb-4">
          <h1>Login</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="flex items-center">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={handlePasswordChange}
            />
            
            {/* Calendar symbol */}
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/3"
            type="submit">
            Log In
          </button>
        </div>
        <div className='text-center pt-4'>
           <p>don't have account <a href='/register' className='text-blue-500 underline hover:text-green-700'>Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
