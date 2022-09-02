import React from 'react'
import './subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe-container'>
<div className='subscribe-img'>
    <img src='https://www.figma.com/file/OcURhI714QBqUKrTyyJ9e8/Real-estate-web-design-(Community)?node-id=22%3A1296' alt='subscribe-img' />
</div>
<div className='subscribe-text-wrapper'>
<h2 className='subscribe-header'>Subscribe to newsletter</h2>
<p className='subscribe-text'>Get the latest news and interesting offers and real estate</p>
<div className='subscribe-input'>
<input type="email" placeholder='Your email address'/>
<button className='subscribe-btn'>Subscribe</button>
</div> 
</div>
    </div>
  )
}

export default Subscribe