import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
          <h1 className="site-title"><a href="index.html"><em className="fa fa-rocket" /> REACT REDUX </a></h1>
          <a href="#menu-toggle" className="btn btn-default" id="menu-toggle"><em className="fa fa-bars" /></a>
          <ul className="nav nav-pills flex-column sidebar-nav">

              <li className="nav-item">
                <a className="nav-link"><Link to="/"><em className="fa fa-dashboard" /> Posts <span className="sr-only">(current)</span></Link></a>
              </li>
          </ul>
          <a href="/" className="logout-button"><em className="fa fa-power-off" /> Signout</a>
      </nav>
    );
  }
}

export default Sidebar;
