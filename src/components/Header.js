import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <header className="App-header">
    <h2>{props.text}</h2>
    <img alt="logo" src={props.logo} width="50px" className="App-logo"/>
    </header>
  )
}

export default Header;
