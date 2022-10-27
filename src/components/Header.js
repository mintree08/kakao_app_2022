import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';

function Header({ h1Class, heading, num, leftItemLink, leftItem, rightItem, }) {


  return (
    <header className='header'>
      <div className="status_bar">
        <div className="left_item">
          <i className="fa-solid fa-plane"></i>
          <i className="fa-solid fa-wifi"></i>
        </div>
        <div className="center_item">
        <span>15</span>: <span>33</span>
        </div>
        <div className="right_item">
          <i className="fa-solid fa-moon"></i>
          <i className="fa-brands fa-bluetooth-b"></i>
          <span><span>100</span>%</span>
          <i className="fa-solid fa-battery-full"></i>
        </div>
      </div>
      <div className="title_bar">
        <h1 className={h1Class}>{heading} <span>{num}</span></h1>
        <div className="left_item">
          <Link to={leftItemLink}>{leftItem}</Link>
        </div>
        <div className="right_item">
          <Link to="#">{rightItem}</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;