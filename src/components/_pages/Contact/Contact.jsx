import React from 'react'
import './Contact.css'
import openHours from '../../../assets/data/openHours'
import { socialLinks, navLinks } from '../../../assets/data/navigation.js'
import GoogleMaps from '../../GoogleMap/GoogleMaps'

const Contact = () => {
  const mapLink = socialLinks
    .filter((link) => link.type === 'location')
    .map((filteredLink) => {
      return filteredLink.url
    })
  const url = mapLink.toString()

  return (
    <main>
      <section className='container contact'>
        <div className='map'>
          <GoogleMaps />
          <div className='btn-container'>
            <button className='btn'>
              <a href={url.toString()} target='_blank' rel='noreferrer'>
                Otevřít
              </a>
            </button>
          </div>
        </div>
        <div className='social-links'>
          {socialLinks.map((link) => {
            const { id, url, icon } = link
            return (
              <a key={id} href={url} target='_blank' rel='noreferrer'>
                {icon}
              </a>
            )
          })}
        </div>
        <div className='open'>
          <ul>
            {openHours.map((singleDay) => {
              const { id, day, from, to, type } = singleDay
              return (
                <li key={id}>
                  <p className='left'>{day}</p>
                  <p className='right'>
                    {to !== '' ? from + ' - ' + to : from}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Contact