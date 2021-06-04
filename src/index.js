import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Main from './Main';
import './index.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


ReactDOM.render(
  <>
    <Header/>
    <Home/>
    <About/>
    <Main/>
  </>,
  document.getElementById('root')
);