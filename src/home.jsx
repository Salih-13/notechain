import React, { useState } from 'react';
import { IoMdCreate } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import { ImCoinDollar } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import { MdModeComment } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './home.css';

const Home = () => {
    const [signUpClicked, setSignUpClicked] = useState(false);
    const [signInClicked, setSignInClicked] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const handleSignUpClick = () => {
      setSignUpClicked(true);
      setSignInClicked(false); // Optional: Reset the other button
    };

    const handleSignInClick = () => {
      setSignInClicked(true);
      setSignUpClicked(false); // Optional: Reset the other button
      navigate('/signin'); // Redirect to /signin
    };

    return (
        <div className='home'>
            <div className='buttons'>
                <button className={`btn ${signInClicked ? 'clicked' : ''}`} onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className='home'>
                <img className='width:100px height:200px' src='./class.png' alt='class'></img>
                <div className='heading'>
                    <div className='head2'><h1>Share what you know, Earn what you deserve.</h1></div>
                    <p><h3>The educhain is a web3 platform where the users can upload their notes on different subjects and can earn from them each time another user accesses these notes.</h3></p>
                </div>
                <div className='head'>
                    <h1>How it works</h1>
                </div>
                <div className='intro'>
                    <div className='note'>
                        <IoMdCreate />
                        <h2>Create a note</h2>
                        <h5>Create a note on a topic you are knowledgeable about</h5>
                    </div>
                    <div className='add'>
                        <FaPlus />
                        <h2>Add your note</h2>
                        <h5>Add your note to the platform</h5>
                    </div>
                    <div className='vote'>
                        <FaPeopleLine />
                        <h2>Community Downloads</h2>
                        <h5>Users can view and download your note</h5>
                    </div>
                    <div className='reward'>
                        <ImCoinDollar />
                        <h2>Earn Rewards</h2>
                        <h5>Earn rewards based on the Downloads you received</h5>
                    </div>
                </div>
                <div className='head'>
                    <h1>Why Educhain</h1>
                </div>
                <div className='intro'>
                    <div className='disc'>
                        <IoSearchSharp />
                        <h2>Discover</h2>
                        <h4>Discover the notes you need</h4>
                    </div>
                    <div className='disc1'>
                        <MdModeComment />
                        <h2>Community</h2>
                        <h4>Be a part of a large community</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
