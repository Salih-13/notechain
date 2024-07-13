import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed: npm install axios
import './addcontent.css';

const Addcontent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log('Selected file:', event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', title);
    formData.append('description', description);

    axios.post('http://your-backend-url/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log('Upload successful:', response.data);
      // Optionally, handle success actions like showing a success message or redirecting
    }).catch(error => {
      console.error('Upload error:', error);
      // Handle error scenarios
    });
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
            <button>Select PDF</button>
          </label>
          <button onClick={handleUpload}>Upload to Database</button>
        </div>
        <div className='image'>
          <img src='./sapiens.png' alt='placeholder' />
        </div>
      </div>
    </div>
  );
};

export default Addcontent;
