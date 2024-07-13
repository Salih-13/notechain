// SignInForm.js
import React, { useState } from 'react';
import Web3 from 'web3';

const SignInForm = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [walletId, setWalletId] = useState('');

  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.enable();
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        // Fetch accounts
        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);

        // Set wallet ID
        if (accounts.length > 0) {
          setWalletId(accounts[0]);
        }
      } catch (error) {
        console.error('User denied MetaMask account access');
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  return (
    <div>
      <h2>Sign In with MetaMask</h2>
      {walletId ? (
        <p>Connected with account: {walletId}</p>
      ) : (
        <button onClick={connectToMetaMask}>Sign In with MetaMask</button>
      )}
    </div>
  );
};

export default SignInForm;
