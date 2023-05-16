import React from 'react'
import '../Css/Nav.css'

function Nav() {
  return (
    <div className='flex'>
        <div className='mention'>
            <div className='hd'>
                <h2>Products</h2>
            </div>
            <div>
                <ul>
                    <li>Home appliances</li>
                    <li>Audio & Video</li>
                    <li>Refrigerator</li>
                    <li>New Arriavls</li>
                    <li>Today's deals</li>
                    <li>Gift cards</li>
                </ul>
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Nav