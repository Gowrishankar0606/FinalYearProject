import React, { useState } from 'react';
import { getalladdress } from '../../services/apiaddress/apiaddress';
import { apiregisterdonor } from '../../services/apidonors/apidonors';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
  const navigate=useNavigate()
  const [formdata,setformdata]=useState({})
  const [selectdata,setselectdata]=useState({})
  const onchange=(e)=>{
   setformdata({...formdata,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration submitted:', formdata);
    const res=await apiregisterdonor(formdata)
    if(res.status=='Sucessfully registered'){
    setformdata({})
    toast.success("Sucessfully registered")
    navigate('/login')
    }
    else{
      toast.error(res.status)
    }
  };
  const getaddress=async(e)=>{
   console.log(e.target.value)
   const res= await getalladdress()
   const dis=res.filter(res=>res.District==e.target.value)
   setselectdata({...selectdata,"taluk":dis.map(res=>res.Taluk_Name)})

  }
  const getvillage=async(e)=>{
    console.log(e.target.value)
    const res= await getalladdress()
    const dis=res.filter(res=>res.Taluk_Name==e.target.value)
    setselectdata({...selectdata,"village":dis[0].Villages})
 
   }

  return (
    <div className="flex justify-center items-center min-h-screen  pt-20 pb-10">
      <form onSubmit={handleSubmit} className="bg-gray-100 text-black-900 shadow-md rounded px-8 pt-6 pb-8 mb-4  h-85  sm:w-2/5 md:w-1/2 lg:w-1/3 xl:w-2/5">
      <div className="text-center text-green-500 text-3xl mb-4">
          <h1>Register</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
           name="fullname"
            onChange={onchange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="date"
            name='dob'
            onChange={onchange}
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
            name='email'
            onChange={onchange}
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
            type="number"
            placeholder="Phone Number"
            name='phonenumber'
            onChange={onchange}
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
            name="bloodgroup"
            onChange={onchange}
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
            Address
          </label>
          <div className="grid grid-cols-2 gap-4">
          <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="state"
             
              onChange={onchange}
              required
            >
              <option value="">Select State</option>
              <option>Tamil Nadu</option>
              
            </select>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="district"
             
              onChange={(e)=>{onchange(e);getaddress(e)}}
              required
            >
              <option value="">Select District</option>
              <option>Cuddalore</option>
              
            </select>
        
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="taluk"
              
             onChange={(e)=>{onchange(e);getvillage(e)}}
              required
            >
              <option value="">Select Taluk</option>
             {selectdata?.taluk?.map((data,index)=>
              <option key={index}>{data}</option>
              )}
            </select>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="Village"
           
              onChange={onchange}
              required
            >
              <option value="">Select Village</option>
              {selectdata?.village?.map((data,index)=>
              <option key={index}>{data}</option>
              )}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Register
          </button>
        </div>
        <div className='text-center pt-4'>
           <p>already have account <a href='/login' className='text-blue-500 underline hover:text-green-700'>Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
