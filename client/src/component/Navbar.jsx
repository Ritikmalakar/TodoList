import React from 'react'
import {Link} from 'react-router-dom';
import '../style/Navbar.css'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>Todo App</div>
      <ul className='nav-links'>
        <li><Link to="/">List</Link></li>
        <li><Link to="/add">Add Task</Link></li>
      </ul>
    </nav>
  )
}
