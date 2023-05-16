import React from 'react'
import '../Css/Second.css'
import pro from '../images/Air-conditioner.jpg'
import pro2 from '../images/tv set.jpg'
import phone from '../images/phone.jpg'
import ref from '../images/refrigerator.jpg'
import oven from '../images/oven.jpg'
import lap from '../images/laptop.jpg'
import fri from '../images/fridge.jpg'
import speak from '../images/speaker.jpg'
function Second() {
  return (
    <div>
        <div className='bord'>
            <div className='img'>
                <div>
                    <img src={pro} alt="" />
                </div>
                <div>
                    <img src={pro2} alt="" />
                </div>
                <div>
                    <img src={phone} alt="" />
                </div>
                <div>
                <img src={ref} alt="" />
                </div>
            </div>
            <div className='img'>
                <div>
                    <img src={oven} alt="" />
                </div>
                <div>
                    <img src={lap} alt="" />
                </div>
                <div>
                    <img src={fri} alt="" />
                </div>
                <div>
                    <img src={speak} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Second