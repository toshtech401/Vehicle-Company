import React from 'react'
import '../Css/Fifth.css'
import head from '../images/headset.png'
import cli from '../images/clip.png'
import game from '../images/game.png'

function Fifth() {
  return (
    <div>
        <div className='hello'>
            <div className='red'>
                <div className='men'>
                    <h1>Wireless <br /> headphones</h1>
                    <p>Starting at $49</p>
                    <button>Shop Now</button>
                </div>
                <div>
                    <img src={head} alt="" />
                </div>
            </div>
            <div className='red'>
                <div className='man'>
                    <h1>Grooming</h1>
                    <p>Starting at $49</p>
                    <button>Shop Now</button>
                </div>
                <div>
                   <img src={cli} alt="" />
                </div>
            </div>
            <div className='orange'>
                 <div className='man'>
                    <h1>Video <br />games</h1>
                    <p>Starting at $49</p>
                    <button>Shop Now</button>
                </div>
                <div>
                    <img src={game} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fifth;