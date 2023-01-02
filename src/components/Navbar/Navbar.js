import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { menuItems } from '../../other/menuItems';
import MenuItems from './MenuItems';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav>
      {(showLinks || screenWidth > 768) ?
        (<ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
              />
            );
          })}
        </ul>) : null}
      <button className='nav-toggle' id="menu-btn" onClick={toggleLinks}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
