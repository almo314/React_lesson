import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar'>
          <div className='navbar__links'>
            <Link to='/about'>О сайте</Link>
            <Link to='/test'>Kokojambo</Link>
            <Link to='/posts'>Posts</Link>
          </div>
        </div>
    );
};

export default Navbar;