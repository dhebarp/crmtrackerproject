import React from 'react';
import {Link} from 'react-router-dom';

export function Nav()
{
  return(
      <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
    <ul className="navbar-nav">
    <li className= {"navbar-brand"}>Lead Tracker</li>
      <li className="nav-item active">
      <Link className={"nav-link"} to='/'>Home </Link>
      </li>
      <li className="nav-item active">
      <Link className={"nav-link"} to='/dashboard'>Dashboard</Link>
      </li>
      <li className="nav-item active">
      <Link className={"nav-link"} to='/form'>New Client</Link>
      </li>
    </ul>
</nav>
  )
}
