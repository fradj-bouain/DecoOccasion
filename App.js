import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header' ;
import Highlights from './components/Highlights/index';
import Featured from './components/Featured/index' ;
import VunueNfo from './components/VunueNfo';
import Pricing from './components/Pricing';
import Location from './components/Location'; 
import Pub from './components/Pub'; 
import About from './components/About'; 
import Footer from './components/header_footer/Footer';

import {Element} from 'react-scroll';


function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "#dddddd" }}>
      <Header />
      
      <Element name="featured">
          <Featured />
          </Element>

          <Element name="vunuenfo">
          <VunueNfo />
          </Element>

          
          <Element name="about">
          <About />
          </Element>

          <Element name="highlights">
          <Highlights />
          </Element>


          <Element name="pricing">
          <Pricing />
          </Element>

          <Element name="pub">
          <Pub />
          </Element>

          <Element name="location">
          <Location />
          </Element>
          

      <Footer />



      

    </div>
  );
}

export default App;
