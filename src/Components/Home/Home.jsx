import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import Intro from '../Intro/intro'
import About from '../About/About';
import './Home.css'
function Home() {
    return (
     <>
    <Intro/>
    <About/>
     </>
    );
  }
  export default withRouter(Home)