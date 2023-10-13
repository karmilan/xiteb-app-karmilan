import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'

const HeaderContainer = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
    <Header mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    <TopBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  )
}

export default HeaderContainer