import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed: npm install axios
import { pinFileToIPFS } from './pinata.js'; // Import your Pinata utility function
import './addcontent.css';

const Addcontent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

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
      // Create a text file with the title and description
      const textFileContent = `Title: ${title}\nDescription: ${description}`;
      const textFile = new Blob([textFileContent], { type: 'text/plain' });
      const textFileName = 'metadata.txt';
      const textFileWithMetadata = new File([textFile], textFileName, { type: 'text/plain' });

      // Upload the text file to Pinata
      const textFileOptions = {
        pinataMetadata: {
          name: textFileName,
          keyvalues: {
            title,
            description,
          },
        },
        pinataOptions: {
          cidVersion: 0,
        },
      };

      const textFileResult = await pinFileToIPFS(textFileWithMetadata, textFileOptions);
      console.log('Text file upload successful:', textFileResult.data.IpfsHash);

      // Upload the selected PDF file to Pinata
      const pdfFileOptions = {
        pinataMetadata: {
          name: selectedFile.name,
          keyvalues: {
            title,
            description,
          },
        },
        pinataOptions: {
          cidVersion: 0,
        },
      };

      const pdfFileResult = await pinFileToIPFS(selectedFile, pdfFileOptions);
      console.log('PDF upload successful:', pdfFileResult.data.IpfsHash);

      // Set upload success to true
      setUploadSuccess(true);

      // Optionally refresh the page after a brief delay
      setTimeout(() => {
        window.location.reload();
      }, 3000); // 3-second delay

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
        {uploadSuccess && <div className='success-message'>Upload successful! The page will refresh shortly...</div>}
      </div>
    </div>
  );
};

export default Addcontent;
