import React from 'react'
import '../Css/Third.css'
import blue from '../images/blue.jpg'
import black from '../images/black.jpg'

function Third() {
  return (
    <div>
       <div className='pics'>
           <div className='blue'>
              <img src={blue} alt="" />
            </div> 
           <div className='black'>
             <img src={black} alt="" />
            </div> 
       </div>
    </div>
  )
}

export default Third