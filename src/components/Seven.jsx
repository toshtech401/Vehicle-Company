import React from 'react'
import '../Css/Seven.css'
import wash from '../images/wash4.jpg'
import was from '../images/wash2.jpg'
import wa from '../images/wash3.jpg'
import ws from '../images/groom.jpg'

function Seven() {
  return (
    <div>
        <div className='padd'>
            <div className='mine'>
                <div>
                    <h1>Home Appliances</h1>
                </div>
                <div>
                    <button>See More</button>
                </div>
            </div>
            <div className='yours'>
                <div>
                    <img src={wash} alt="" />
                </div>
                <div>
                    <img src={was} alt="" />
                </div>
                <div>
                    <img src={wa} alt="" />
                </div>
                <div>
                    <img src={ws} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seven