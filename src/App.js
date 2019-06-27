import React from 'react';
import map from './img/map.png';
import meetTheTeam from './img/meettheteam.png'
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='Header'>
        <div className='Header_content'>
          <h1> POSSIBLE </h1>
          <h3> 10 styczeń 2019</h3>
        </div>
      </header>
      <main>
        <div className='hero_top_bar'>
          <button className='hero_top_bar_button'> OUR COMPANY </button>
          <button className='hero_top_bar_button'> OUR WORK </button>
          <button className='hero_top_bar_button'> INFORMATION </button>
          <button className='hero_top_bar_button'> CONTACT US </button>
        </div>
          <div className='hero_content_container'>
          
          <div className='hero_content'>
          <h1> Welcome to Possible </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> 
            <br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2> MEET THE TEAM</h2>
          <img src={meetTheTeam}></img>
          </div>
          <div className='hero_sidebar'>
          <h1>LOREM IPSUM</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
          </div>
        </div>
      </main>
      <nav>
      <button className='nav_bar_button'> Our company </button>
      <button className='nav_bar_button'> Our work </button>
      <button className='nav_bar_button'> Information </button>
      <button className='nav_bar_button'> Join our newsletter </button>
      <button className='nav_bar_button'> Email this page </button>
      <button className='nav_bar_button'> Print this page </button>
      <button className='nav_bar_button'> Contact us </button>
      </nav>
    </div>
  );
}

export default App;
