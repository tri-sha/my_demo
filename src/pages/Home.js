import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Button from '../components/Button';
function Home() {
  return (
    <div className= 'column'>
      <Button />
    <div className='home'>
      <HeroSlider />
      </div>
      <div className='heading'>
        <h1><b>Our Results</b></h1>
       
        </div>
    </div>
    
  );
}

export default Home;