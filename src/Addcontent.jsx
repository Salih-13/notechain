import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed: npm install axios
import { pinFileToIPFS } from './pinata.js'; // Import your Pinata utility function
import './addcontent.css';

const Addcontent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log('Selected file:', event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    try {

      const options = {
        pinataMetadata: {
            name: selectedFile.name,
            keyvalues: {
              title,
              description
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
      }

      const result = await pinFileToIPFS(selectedFile, options);
      console.log('Upload successful:', result.IpfsHash);

      // insert to blockchain


      // Optionally, handle success actions like showing a success message or redirecting
    //   window.location.reload(); // Refresh the page after successful upload
    } catch (error) {
      console.error('Upload error:', error);
      // Handle error scenarios
    }
  };

  return (
    <div>
      <div className='addd notes'>
        <h1>Share your notes</h1>

        <div className='title'>
          <h4>Title</h4>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='description'>
          <h4>Description</h4>
          <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='upload'>
          <h4>Upload</h4>
          <label className='upload-button'>
            <input
              type='file'
              accept='application/pdf'
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            Select PDF
          </label>
          <button onClick={handleUpload}>Upload to Pinata</button>
        </div>
        <div className='image'>
          <img src='./sapiens.png' alt='placeholder' />
        </div>
      </div>
    </div>
  );
};

export default Addcontent;
