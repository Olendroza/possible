import React from 'react';
import map from './img/map.png';
import meetTheTeam from './img/meettheteam.png'
import logo from './img/logo.png'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='content'>
      <header className='header'>
        <div className='header_content'>
          <p className='header_title'> <img src={logo}/> </p>
          <p className='header_date'> 10 styczeń 2019</p>
        </div>
      </header>
      <main>
        <div className='hero_top_bar'>
          <button id='clickedButton' className='hero_top_bar_button'> OUR COMPANY </button>
          <button className='hero_top_bar_button'> OUR WORK </button>
          <button className='hero_top_bar_button'> INFORMATION </button>
          <button className='hero_top_bar_button'> CONTACT US </button>
        </div>
          <div className='hero_content_container'>
          
          <div className='hero_content'>
          <h2> Welcome to Possible </h2>
          <p className='hero_content_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> 
            <br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident.
          </p>
          <h5> MEET THE TEAM</h5>
          <img src={meetTheTeam}></img>
          </div>
          <div className='hero_sidebar'>
            <div className='hero_sidebar_item'>
            <p className='hero_sidebar_item_title'>LOREM IPSUM</p>
            <img src={map}></img>
            <p className='hero_sidebar_item_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>
          </div>
        </div>
      </main>
      <nav>
        <div className='nav_content'>
          <button className='nav_bar_button'> Our company </button>
          <button className='nav_bar_button'> Our work </button>
          <button className='nav_bar_button'> Information </button>
          <button className='nav_bar_button'> Join our newsletter </button>
          <button className='nav_bar_button'> Email this page </button>
          <button className='nav_bar_button'> Print this page </button>
          <button className='nav_bar_button'> Contact us </button>
      </div>
      </nav>
      </div>
    </div>
  );
}

export default App;
