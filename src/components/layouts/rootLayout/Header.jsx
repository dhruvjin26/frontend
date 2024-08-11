import React from "react";
import {NavLink, Outlet} from "react-router-dom";


function Header() {
  return (
    <div className="bg-gray-800  inset-y-0 left-0">
      <header className="thatheader">
      <NavLink to="/"  ><h1 className="firstHeader">Indian Institute of Technology Madras</h1></NavLink>
        
      </header>
    </div>
  )
}
 
export default Header;
