import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (<div className="nav">
    <Link to={'/'}>Home</Link>
    <Link to={'/contact'}>Contacts</Link>
  </div>)
}

export default Nav;
