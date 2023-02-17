import React from 'react'
import './About.css'
import about from '../../../assets/data/aboutData'

const About = () => {
  return (
    <main>
      <section className='container about'>
        <h1 className='page-heading'>Napsali o nás</h1>
        <div className='container-about'>
          {about
            .sort((a, b) => b.id - a.id)
            .map((article) => {
              const {
                id,
                photo,
                alt,
                date,
                baseUrl,
                url,
                heading,
                shortDescription,
              } = article
              return (
                <div key={id} className='card'>
                  <div className='card-header'>
                    <img src={photo} alt={alt} />
                  </div>
                  <div className='card-body'>
                    <span className='tag tag-secondary'>{date}</span>
                    <span className='base-url'>
                      <a href={baseUrl}>{baseUrl}</a>
                    </span>
                    <h4>
                      <b>{heading.substring(0, 50)}...</b>
                    </h4>
                    <p>{shortDescription.substring(0, 100)}...</p>
                    <div className='btn-container'>
                      <button className='btn'>
                        <a href={url} target='_blank' rel='noreferrer'>
                          Číst dál
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </main>
  )
}

export default About
