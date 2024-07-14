// src/pinata.js

import axios from 'axios';

const PINATA_API_KEY = 'd4a481e752737e54d1dc';
const PINATA_SECRET_API_KEY = 'f350d44ae82a1fdc42493b9ccb68f9d7950c6cf214727f0a63e7ea959d6b59b6';

export const pinFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append('file', file);

  const metadata = JSON.stringify({
    name: file.name,
    keyvalues: {
      exampleKey: 'exampleValue',
    },
  });

  data.append('pinataMetadata', metadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });

  data.append('pinataOptions', pinataOptions);

  try {
    const res = await axios.post(url, data, {
      maxContentLength: 'Infinity', // this is needed to prevent axios from erroring out with large files
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error pinning file to IPFS:', error);
    throw error;
  }
};

export const pinJSONToIPFS = async (json) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  try {
    const res = await axios.post(
      url,
      json,
      {
        headers: {
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error pinning JSON to IPFS:', error);
    throw error;
  }
};
