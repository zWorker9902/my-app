import React, { Component } from 'react';
import { render } from 'react-dom'; // 将元素插入到界面中去
import 'bootstrap/dist/css/bootstrap.min.css';

// import MessageBox from './components-1/MessageBox';
import Slider from './components/Slider';

let IMAGE_DATA = [
  {src: require('./images/1.jpeg')},
  {src: require('./images/2.jpeg')},
  {src: require('./images/3.jpeg')},
];

render(
  <Slider
    items={IMAGE_DATA}
    speed={1.2}
    delay={2.1}
    pause={true}
    autoplay={true}
    dots={true}
    arrows={true}
  />
  , window.app)