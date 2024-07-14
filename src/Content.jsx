import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './content.css'; // Ensure you have appropriate CSS

const Content = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromPinata = async () => {
      try {
        const res = await axios.get('https://api.pinata.cloud/data/pinList', {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4ZDJlOTIzNy03MDhjLTQ4Y2UtOGMwMS1jMjJhZmUyYjk2MDQiLCJlbWFpbCI6Im1vaGFtbWVkc2FsaWgwNTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQ0YTQ4MWU3NTI3MzdlNTRkMWRjIiwic2NvcGVkS2V5U2VjcmV0IjoiZjM1MGQ0NGFlODJhMWZkYzQyNDkzYjljY2I2OGY5ZDc5NTBjNmNmMjE0NzI3ZjBhNjNlN2VhOTU5ZDZiNTliNiIsImV4cCI6MTc1MjQ0MjczOX0.rLq9ZJLkec6Cb0x2rEJHXadEDhQdmFDnc3289urDj94`, // Replace with your actual JWT token
          },
        });

        setFiles(res.data.rows); // Adjust based on the actual response structure
      } catch (error) {
        setError(error);
        console.error('Error fetching data from Pinata:', error);
      }
    };

    fetchDataFromPinata();
  }, []);

  if (error) {
    return <div>Error fetching data from Pinata: {error.message}</div>;
  }

  return (
    <div className='content-container'>
      {files.map((file, i) => {
        if(i%2 != 0){
            return(
              <div key={file.ipfs_pin_hash} className='file-card'>
                <div className='file-info'>
                  <h2>{file.metadata.keyvalues.title}</h2>
                  <p>{file.metadata.keyvalues.description}</p>
                </div>
                <div className='file-link'>
                  <a href={`https://gateway.pinata.cloud/ipfs/${file.ipfs_pin_hash}`} target='_blank' rel='noopener noreferrer'>
                    View File
                  </a>
                  <a href={`https://gateway.pinata.cloud/ipfs/${file.ipfs_pin_hash}`} download>
                    <button>Download</button>
                  </a>
                </div>
              </div>
            )}
        }
      )}
    </div>
  );
};

export default Content;
