import React from 'react'
import './Partners.css'
import partners from '../../../assets/data/partners'

const Partners = () => {
  return (
    <main>
      <section className='container partners'>
        {partners.map((partner) => {
          const { id, image, title, url } = partner
          return (
            <div key={id} className='partners-box'>
              <a href={url} target='_blank' rel='noreferrer'>
                <img src={image} alt={title} />
              </a>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Partners
