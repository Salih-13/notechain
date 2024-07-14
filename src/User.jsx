import React, { useEffect, useState } from 'react';
import { MdOutlineCreate } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import axios from 'axios';
import './user.css'; // Import the CSS file

const User = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Function to fetch uploaded files
  const fetchUploadedFiles = async () => {
    try {
      // Replace with your backend API endpoint or Pinata API call to fetch files
      const res = await axios.get('https://api.example.com/user/files', {
        headers: {
          Authorization: `Bearer yourAuthToken`, // Replace with your actual authentication token
        },
      });
      setUploadedFiles(res.data.files); // Assuming response has an array of files
    } catch (error) {
      console.error('Error fetching uploaded files:', error);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []); // Fetch files on component mount

  const handleCreateClick = () => {
    navigate('/upload'); // Redirect to /upload
  };

  const handleViewClick = () => {
    navigate('/notes'); // Redirect to /notes
  };

  return (
    <div className='main'>
      <div className='user'>
        <h1>Hey, fellow learner</h1>
      </div>
      <div className='card-container'>
        <div className='view' onClick={handleViewClick}>
          <FaRegEye />
          <h2>View</h2>
        </div>
        <div className='create' onClick={handleCreateClick}>
          <MdOutlineCreate />
          <h2>Create</h2>
        </div>
      </div>
      <div className='dash'>
        <h1><u>Dashboard</u></h1>
        <div className='uploaded-files'>
          <h2>Uploaded Files:</h2>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <a href={`https://gateway.pinata.cloud/ipfs/${file.ipfs_hash}`} target='_blank' rel='noopener noreferrer'>
                  {file.filename}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
