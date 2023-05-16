import React from 'react'
import '../Css/Six.css'
import theat from '../images/theater.jpg'
import the from '../images/home.jpg'
import tv from '../images/vision.jpg'
import head from '../images/tele.jpg'




function Six() {
  return (
    <div className='wow'>
      <div className='me'>
        <div>
          <h1>Audio & Video</h1>
        </div>
        <div>
          <button>See More</button>
        </div>
      </div>
        <div className='you'>
          <div>
            <img src={theat} alt="" />
          </div>
          <div>
            <img src={the} alt="" />
          </div>
          <div>
            <img src={tv} alt="" />
          </div>
          <div>
            <img src={head} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Six