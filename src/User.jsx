import React from 'react'
import { MdOutlineCreate } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";

const User = () => {
  return (
    <div>
      <div className='main'>
        <div className='user'>
            <h1>Hey, fellow learner</h1>
        </div>
        <div className='view'>
            <FaRegEye />
            <h2>View</h2>
        </div>
        <div className='create'>
            <MdOutlineCreate />
            <h2>Create</h2>
        </div>
      </div>
    </div>
  )
}

export default User
