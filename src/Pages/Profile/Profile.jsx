import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const history = useHistory();

  useEffect(() => {
    // Fetch user details from backend upon component mount
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      // Make API request to fetch user details
      const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleEdit = () => {
    // Redirect to edit profile page
    history.push('/edit-profile');
  };

  const handleDelete = async () => {
    try {
      // Make API request to delete user details
      await axios.delete('YOUR_BACKEND_DELETE_ENDPOINT');
      // Redirect to home page or login page after deletion
      history.push('/');
    } catch (error) {
      console.error('Error deleting user details:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="mb-4">
        <p><strong>Full Name:</strong> {userDetails.fullName}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        {/* Display other user details as needed */}
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleEdit}>
          Edit Profile
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleDelete}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
