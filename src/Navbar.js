import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Navbar.css';


const Navbar = ({onNewGame})=>{
    return (
        <div className = "nav">
           <header>
               <h2>Memory Game</h2>
           </header>
           <nav>
               <li><a onClick = {onNewGame}>New Game</a></li>
           </nav>
        </div>
    );  
}

Navbar.propTypes = {
    onNewGgame: propTypes.func.isRequired
}

export default Navbar;