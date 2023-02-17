import React from 'react'
import './SidebarToggle.css'

import logo from '../../assets/images/logo/primmatgym1.png'
import { FaTimes, FaGithubSquare } from 'react-icons/fa'
import { socialLinks, navLinks } from '../../assets/data/navigation'
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'

const SidebarToggle = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : null}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='coding addict' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {navLinks.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {icon}
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {socialLinks.map((item) => {
          const { id, url, icon } = item
          return (
            <li key={id}>
              <a
                href={url}
                target='_blank'
                rel='noreferrer'
                onClick={closeSidebar}
              >
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
      <p>
        <a href='https://github.com/emines0' target='_blank' rel='noreferrer'>
          <span>Created by</span> <FaGithubSquare />
        </a>
      </p>
    </aside>
  )
}
export default SidebarToggle
