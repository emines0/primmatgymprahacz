import './Homepage.css'
import home from '../../../assets/data/homeData'
import React from 'react'

const Homepage = () => {
  return (
    <main>
      {home.map((content) => {
        const { id, heading, paragraphs1, paragraphs2 } = content
        return (
          <section key={id} className='container homepage'>
            <h1 className='page-heading'>{heading}</h1>
            {paragraphs1.map((paragraph1, index) => {
              const { text } = paragraph1
              return (
                <div key={index}>
                  <p className={`${index === 0 ? 'add-padding-top' : null}`}>
                    {text}
                    <span className={`${index === 0 ? 'hide-link' : null}`}>
                      <a href='/contact' className='text-link'>
                        {' '}
                        Kontakt
                      </a>{' '}
                      a{' '}
                      <a href='/training' className='text-link'>
                        Trénink
                      </a>
                    </span>
                  </p>
                </div>
              )
            })}

            <div className='ytvideo'>
              <iframe
                src={'https://www.youtube-nocookie.com/embed/BMqbsp3h9bQ'}
                title='PriMMAt Gym Promo'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='box-container'>
              {paragraphs2.map((paragraph2, index) => {
                const { title, text, icon } = paragraph2
                return (
                  <div key={index} className='box-item '>
                    <h2 className='line'>{title}</h2>
                    <p>{text}</p>
                    <div className='box-item-footer'>{icon}</div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </main>
  )
}

export default Homepage
