import React from 'react'
import './Navigation.css'
import SidebarToggle from '../SidebarToggle/SidebarToggle'

import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context/context'
import logo from '../../assets/images/logo/primmatgym1.png'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext()

  return (
    <>
      <div className='bars-container'>
        <div
          className={`bars-logo ${isSidebarOpen ? 'hide-bars' : 'show-bars'}`}
        >
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
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
