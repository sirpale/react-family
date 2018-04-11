import React,{ Component } from 'react';
import './page1.css';
import image from './images/ava.jpg';

export default class Page1 extends Component {
  render() {
    return (
      <div className="page-box">
        <img src={image} alt=""/>
      </div>
    )
  }
}