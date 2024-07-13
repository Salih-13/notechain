import React, { useState } from 'react';
import { IoMdCreate } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import { ImCoinDollar } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import { MdModeComment } from "react-icons/md";
import './home.css';

const Home = () => {
    const [signUpClicked, setSignUpClicked] = useState(false);
    const [signInClicked, setSignInClicked] = useState(false);
  
    const handleSignUpClick = () => {
      setSignUpClicked(true);
      setSignInClicked(false); // Optional: Reset the other button
    };
  
    const handleSignInClick = () => {
      setSignInClicked(true);
      setSignUpClicked(false); // Optional: Reset the other button
    };

  return (
    
    <div className='home'>
        <div className='buttons'>
        <button className={`btn ${signUpClicked ? 'clicked' : ''}`} onClick={handleSignUpClick}>Sign Up</button>
        <button className={`btn ${signInClicked ? 'clicked' : ''}`} onClick={handleSignInClick}>Sign In</button>
      </div>
      <div className='home'>
        <img className='width:100px height:200px' src='./class.png' ></img>
        <div className='heading'>
        <h1>Share what you know,Earn what you deserve.</h1>
        <p><h3>The educhain is web3 platform where the users can upload there notes on different subjects can earn from them each time an other user acess these notes.</h3></p>
        </div>
        <div className='head'>
        <h1>How it works</h1>
        </div>
        <div className='intro'>
            
            <div className='note'>
                <IoMdCreate />
                <h2>Create a note</h2>
                <h5>Create a note on you are knowlagable about</h5>
            </div>
            <div className='add'>
                <FaPlus />
                <h2>Add your note</h2>
                <h5>Add your note to the platform</h5>
            </div>
            <div className='vote'>
                <FaPeopleLine />
                <h2>Community Votes</h2>
                <h5>The users can view and upvote your note</h5>
            </div>
            <div className='rewrd'>
                <ImCoinDollar />   
                <h2>Earn Rewards</h2>
                <h5>Earn rewards based on the upvotes you recieved</h5>
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
  )
}

export default Home;
