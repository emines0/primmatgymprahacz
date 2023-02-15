import React from 'react'
import './PriceList.css'
import priceList from '../../../assets/data/priceList'

const PriceList = () => {
  return (
    <main>
      <section className='container price-list'>
        <h1 className='page-heading'>Ceník</h1>
        <div className='price-list-container'>
          {priceList.map((item) => {
            const { id, name, price } = item

            return (
              <div key={id} className='columns'>
                <ul className='price'>
                  <li className='header'>{name}</li>
                  <li className='grey'>
                    {price.toFixed(2).toLocaleLowerCase() + ',- CZK'}
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default PriceList
