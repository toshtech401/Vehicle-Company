import React from 'react'
import one from "../Components/Images/one.webp"
import two from "../Components/Images/two/jpeg"
import three from "../Components/Images/three.webp"
import four from "../Components/Images/four.webp"
import five from "../Components/Images/five.webp"
import seven from "../Components/Images/seven.webp"

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