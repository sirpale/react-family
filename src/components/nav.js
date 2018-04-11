import React, { Component } from 'react';


export default class Nav extends Component {
  render() {
    return(

        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/page1">Page1</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/user-info">user-info</Link></li>
        </ul>

    )
  }
}