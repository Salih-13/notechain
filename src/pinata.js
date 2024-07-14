// src/pinata.js

import axios from 'axios';

const pinataApiKey = 'd4a481e752737e54d1dc';
const pinataSecretApiKey = 'f350d44ae82a1fdc42493b9ccb68f9d7950c6cf214727f0a63e7ea959d6b59b6';

export const pinFileToIPFS = async (file, options) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const data = new FormData();
    data.append('file', file);
  
    const metadata = JSON.stringify(options.pinataMetadata);
    data.append('pinataMetadata', metadata);
  
    const pinataOptions = JSON.stringify(options.pinataOptions);
    data.append('pinataOptions', pinataOptions);
  
    return axios.post(url, data, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      },
    });
  };
  
