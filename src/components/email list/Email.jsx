import React from 'react';
import './email.css';
const Email = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save Time ,Save Money!</h1>
        <span className='mailDesc'>Sign up and we will send the best details to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button className='mailInputButton'>Subscribe</button>
        </div>

    </div>
  )
}

export default Email