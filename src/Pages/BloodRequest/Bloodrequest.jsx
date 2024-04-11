import React, { useState } from 'react';


const Bloodrequest = () => {
  const [fullName, setFullName] = useState('');
  
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [bloodLocation, setBloodLocation] = useState({
    district: '',
    city: '',
    taluk: '',
    town: '',
  });
  const [hospitalName, setHospitalName] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };

  const handleBloodLocationChange = (e) => {
    const { name, value } = e.target;
    setBloodLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value,
    }));
  };

  const handleHospitalNameChange = (e) => {
    setHospitalName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration submitted:', { fullName, email, phoneNo, bloodGroup, bloodLocation, hospitalName });
  };

  return (
    <div className="flex justify-center items-center min-h-screen  pt-20 pb-10">
      <form onSubmit={handleSubmit} className="bg-gray-100 text-black-900 shadow-md rounded px-8 pt-6 pb-8 mb-4  h-85  sm:w-2/5 md:w-1/2 lg:w-1/3 xl:w-2/5">
      <div className="text-center text-green-500 text-3xl mb-4">
          <h1>Blood Request</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
             Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
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
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNo">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNo"
            type="tel"
            placeholder="Phone Number"
            value={phoneNo}
            onChange={handlePhoneNoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodGroup">
            Blood Group
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bloodGroup"
            value={bloodGroup}
            onChange={handleBloodGroupChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodLocation">
            Blood Needed Location
          </label>
          <div className="grid grid-cols-2 gap-4">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="district"
              value={bloodLocation.district}
              onChange={handleBloodLocationChange}
              required
            >
              <option value="">Select District</option>
              <option value="District 1">District 1</option>
              <option value="District 2">District 2</option>
              <option value="District 3">District 3</option>
              {/* Add more options as needed */}
            </select>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="city"
              value={bloodLocation.city}
              onChange={handleBloodLocationChange}
              required
            >
              <option value="">Select City</option>
              <option value="City 1">City 1</option>
              <option value="City 2">City 2</option>
              <option value="City 3">City 3</option>
              {/* Add more options as needed */}
            </select>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="taluk"
              value={bloodLocation.taluk}
              onChange={handleBloodLocationChange}
              required
            >
              <option value="">Select Taluk</option>
              <option value="Taluk 1">Taluk 1</option>
              <option value="Taluk 2">Taluk 2</option>
              <option value="Taluk 3">Taluk 3</option>
              {/* Add more options as needed */}
            </select>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="town"
              value={bloodLocation.town}
              onChange={handleBloodLocationChange}
              required
            >
              <option value="">Select Town</option>
              <option value="Town 1">Town 1</option>
              <option value="Town 2">Town 2</option>
              <option value="Town 3">Town 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hospitalName">
            Hospital Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hospitalName"
            type="text"
            placeholder="Hospital Name"
            value={hospitalName}
            onChange={handleHospitalNameChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bloodrequest;