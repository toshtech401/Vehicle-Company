import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsArrowCounterclockwise} from 'react-icons/bs'
import {BsFillCreditCardFill} from 'react-icons/bs'
import '../Css/First.css'
function First() {
  return (
    <div className='click'>
        <marquee behavior="" direction="left">
            <div className='move'>
                <div className='left'>
                    <TbTruckDelivery />
                    <div>
                        <h3>Free Shipping</h3>
                        <p>When you spend $80 or more</p>
                    </div>
                </div>
                <div className='left'>
                    <AiOutlineMessage />
                    <div>
                        <h3>We are available 24/7</h3>
                        <p>Need help? Contact anytime</p>
                    </div>
                </div>
                <div className='left'>
                    <BsArrowCounterclockwise />
                    <div>
                        <h3>Satisfied or return</h3>
                        <p>Easy 30-day return policy</p>
                    </div>
                </div>
                <div className='left'>
                    <BsFillCreditCardFill />
                    <div>
                        <h3>100% secure payments</h3>
                        <p>Visa, Mastercard, Stripe, Paypal</p>
                    </div>
                </div>
            </div>
        </marquee>
    </div>
  )
}

export default First