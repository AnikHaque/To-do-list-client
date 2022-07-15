import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
      <img src='https://img.freepik.com/premium-vector/profile-gradient-logo-design-template-icon_442940-616.jpg?w=2000' className='w-20'></img>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
    <li><Link to='/records'>All Records</Link></li>
       
      
      </ul>
    </div>
    <img src='https://img.freepik.com/premium-vector/profile-gradient-logo-design-template-icon_442940-616.jpg?w=2000' className='w-20'></img>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/records'>All Records</Link></li>
     
    
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Get started</a>
  </div>
</div>
    </div>
  )
}
