import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Content = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataFromPinata();
  }, []);

  const fetchDataFromPinata = async () => {
    try {
        const res = await fetch("https://api.pinata.cloud/data/pinList?metadata[name]=adsf", {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4ZDJlOTIzNy03MDhjLTQ4Y2UtOGMwMS1jMjJhZmUyYjk2MDQiLCJlbWFpbCI6Im1vaGFtbWVkc2FsaWgwNTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQ0YTQ4MWU3NTI3MzdlNTRkMWRjIiwic2NvcGVkS2V5U2VjcmV0IjoiZjM1MGQ0NGFlODJhMWZkYzQyNDkzYjljY2I2OGY5ZDc5NTBjNmNmMjE0NzI3ZjBhNjNlN2VhOTU5ZDZiNTliNiIsImV4cCI6MTc1MjQ0MjczOX0.rLq9ZJLkec6Cb0x2rEJHXadEDhQdmFDnc3289urDj94`,
            }
          });
          console.log(res)
      const response = await axios.get('https://peach-neat-camel-924.mypinata.cloud/ipfs/QmNykgScuSBJjsHPST2JwX2q8zEn84uML9uNFz7BivqZcv');
      console.log('Pinata files:', response);
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching data from Pinata:', error);
      setError('Network Error: Unable to fetch data'); // Set generic error message
    }
  };

  return (
    <div className='content'>
      {error && <p>Error: {error}</p>}
      <div className='folder'>
        <h2>My Pinata Files</h2>
        <ul>
            <li>
              <div className='file-details'>
                <h3>My Question</h3>
                <p>I dont know the answer</p>
              </div>
              <div className='file-actions'>
                <a href="https://peach-neat-camel-924.mypinata.cloud/ipfs/QmNykgScuSBJjsHPST2JwX2q8zEn84uML9uNFz7BivqZcv" target='_blank' rel='noopener noreferrer'>View File</a>
              </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
