import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css'

const Header = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>We Only Serve Delicious Dishes</h2>
            <p>Welcome to our food ordering platform! Browse our diverse menu, from tantalizing appetizers to mouthwatering entrees. Order your favorites with ease and convenience. Enjoy delicious meals delivered right to your doorstep!</p>
            <button><a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>View Menu</a></button>
            <ul className="navbar-menu">
                 
                             
                        </ul>
        </div>
    </div>
  )
}

export default Header