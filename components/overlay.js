import React, { Component } from 'react';
import Profile from '../components/profile'
// import { Container } from './styles';


const Overlay = () => (

  <div className="overlay" >
    <div className="container">
      <Profile 
        title="Rogerio Orioli" 
        subtitle="Advertising Developer" 
        content="Paulistano, Web Developer and Graphic Designer, in the short time skater and collector of Vinyl records. I like Music, technology, sports, gastronomy and movies. I do not refuse a good course, be with family and friends.I have great love for advertising, art and Javascript. " 
        linkedin={'https://www.linkedin.com/in/rogeriorioli/'} 
        github={'https://github.com/rogeriorioli'} 
        twitter={'https://twitter.com/rogeriorioli'}
        whatsapp={'https://api.whatsapp.com/send?phone=5511994838771'}
  
    />
    </div>
  </div>

)

export default Overlay;