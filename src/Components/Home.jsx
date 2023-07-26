import React from 'react'
import one from "./Images/one.webp"
import two from "./Images/two.jpeg"
import three from "./Images/three.webp"
import four from "./Images/four.webp"
import five from "./Images/five.webp"
import six from "./Images/six.webp"
import seven from "./Images/seven.webp"

const Home = () => {
  return (
    <main>
      <section>
        <h2>Welcome to TechCorp</h2>
        <p>Home of best technologies in the universe</p>
      </section>
      <section className='img'>
        <div>
          <img src={one} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo atque quam voluptates corrupti voluptatum placeat dolorum itaque facere ipsam!</p>
        </div>
        <div>
          <img src={two} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo atque quam voluptates corrupti voluptatum placeat dolorum itaque facere ipsam!</p>

        </div>
        <div>
          <img src={three} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo atque quam voluptates corrupti voluptatum placeat dolorum itaque facere ipsam!</p>

        </div>
      </section>
      <section className='img'>
        <div>
         <img src={four} alt="" />
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo atque quam voluptates corrupti voluptatum placeat dolorum itaque facere ipsam!</p>
         
        </div>
        <div>
          <img src={five} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo atque quam voluptates corrupti voluptatum placeat dolorum itaque facere ipsam!</p>

        </div>
        <div>
         <img src={seven} alt="" />
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo atque quam voluptates corrupti voluptatum placeat dolorum itaque facere ipsam!</p>
        </div>
      </section>
    </main>
  )
}

export default Home