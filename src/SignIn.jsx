import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
import './signin.css';

const SignInForm = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [walletId, setWalletId] = useState('');
  const navigate = useNavigate();

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

        // Set wallet ID and redirect
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

  useEffect(() => {
    if (walletId) {
      // Redirect to home page after successful sign-in
      navigate('/user');
    }
  }, [walletId, navigate]);

  return (
    <div className='sign'>
    <div className="sign-in-container">
      <h2 className="sign-in-title">Sign In with MetaMask</h2>
      {walletId ? (
        <div className="wallet-info">
          <p className="wallet-id">Connected with account: {walletId}</p>
        </div>
      ) : (
        <div className="sign-in-button-container">
          <button className="sign-in-button" onClick={connectToMetaMask}>
            Sign In with MetaMask
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default SignInForm;
