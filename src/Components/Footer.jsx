import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='foot'>
        <div>
          <h1>TechCorp</h1>
        </div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div className='btt'>
          <h2>Get In Touch</h2>
           <input type="text" />
           <button>Message Us</button>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} TechCorp. All rights reserved.</p>
    </footer>
  )
}

export default Footer