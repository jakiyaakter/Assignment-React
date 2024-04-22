import React from 'react';
import "./Header.css";


const Header = () => {
    return (
        <div className='header'>
          <h1>Jakiya</h1>
        <ul>
            <li>
                <a href=''>Home</a>
            </li>
            <li>
                <a href=''>About</a>            
            </li>
            <li>
                <a href=''>Blog</a>
            </li>
            <li>
                <a href=''>Contact</a>
            </li>
        </ul>
        </div>
      );
    };

  

export default Header