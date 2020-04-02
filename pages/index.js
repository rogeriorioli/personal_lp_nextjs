import React from 'react'
import Head from '../components/head'
import Overlay from '../components/overlay'
import '../assets/style.css'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-71468228-1');
const Home = () => (
  
  <div>
    <Head 
    title="Rogerio Orioli Web Devoloper" 
    description="Paulistano, Web Developer and Graphic Designer, solid knowledgment in Javascript and Wordpress in the short time skater and collector of Vinyl records. I like Music, technology, sports, gastronomy and movies. I do not refuse a good course, be with family and friends.I have great love for advertising, art and Javascript."
      
    />
    <div className="background" 

    />
    <Overlay/>
  </div>

  
)
export default Home
