import React from 'react'
import {Link} from 'react-router-dom'


function Nav() {
    return (
      <div className="nav">
        <Link to='/'><h3>StreetArt</h3></Link>
        <Link to='/addpost'> <button className='btn btnAdd'>Add new post</button></Link> 
      </div>
    );
  }
  
  export default Nav;