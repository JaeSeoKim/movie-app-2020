import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navigation.css";

function Navigation() {
  return <div className="nav">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </div>
}

export default Navigation;