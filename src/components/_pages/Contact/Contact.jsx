import React from 'react'
import './Contact.css'
import openHours from '../../../assets/data/openHours'
import { socialLinks } from '../../../assets/data/navigation.js'
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
                Otevřít Mapu
              </a>
            </button>
          </div>
        </div>
        <h1 className='page-heading add-padding-top'>Kontakt</h1>
        <div className='social-links'>
          {socialLinks.map((link) => {
            const { id, url, icon } = link
            return (
              <div key={id} className='link-box'>
                <a href={url} target='_blank' rel='noreferrer'>
                  {icon}
                </a>
              </div>
            )
          })}
        </div>
        <div className='open'>
          <h2>Otevírací hodiny</h2>
          <ul>
            {openHours.map((singleDay) => {
              const { id, day, from, to } = singleDay
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
        <div className='parking'>
          <p>Pro návštěvníky parkoviště v areálu zdarma.</p>
        </div>
      </section>
    </main>
  )
}

export default Contact
