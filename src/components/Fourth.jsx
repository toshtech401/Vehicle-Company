import React from 'react'
import port from '../images/clipper.jpg'
import speak from '../images/speaker.jpg'
import spek from '../images/speaker1.jpg'
import smart from '../images/smart.jpg'
import hand from '../images/handset.jpg'
import deg from '../images/laptop.jpg'
import dev from '../images/pc.jpg'
import tech from '../images/tv set.jpg'
import '../Css/Fourth.css'


function Fourth() {
  return (
    <div>
       <div className='deg'>
            <div className='tec'>
                <div>
                    <h2>Toady's Best Deals</h2>
                </div>
                <div>
                    <button>See More</button>
                </div>
            </div>
            <div className='smart'>
                <div>
                    <img src={port} alt="" />
                </div>
                <div>
                    <img src={speak} alt="" />
                </div>
                <div>
                    <img src={spek} alt="" />
                </div>
                <div>
                    <img src={smart} alt="" />
                </div>
            </div>
            <div className='smart'>
                <div>
                    <img src={hand} alt="" />
                </div>
                <div>
                    <img src={deg} alt="" />
                </div>
                <div>
                    <img src={tech} alt="" />
                </div>
                <div>
                    <img src={dev} alt="" />
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Fourth