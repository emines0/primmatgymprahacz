import React from 'react'
import './Navigation.css'
import SidebarToggle from '../SidebarToggle/SidebarToggle'

import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context/context'
import logo from '../../assets/images/logo/primmatgym1.png'

const Navigation = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext()

  return (
    <>
      <div className='bars-container'>
        <div
          className={`bars-logo ${isSidebarOpen ? 'hide-bars' : 'show-bars'}`}
        >
          <img src={logo} alt='logo' />
        </div>
        <button
          className={`sidebar-toggle ${
            isSidebarOpen ? 'hide-bars' : 'show-bars'
          }`}
          onClick={openSidebar}
        >
          <FaBars />
        </button>
      </div>
      <SidebarToggle />
    </>
  )
}

export default Navigation
