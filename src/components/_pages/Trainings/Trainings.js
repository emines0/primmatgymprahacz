import FsLightbox from 'fslightbox-react'
import './Trainings.css'
import timetable from '../../../assets/images/timetable/timetable.png'
import priceList from '../../../assets/data/priceList'
import { useGlobalContext } from '../../../context/context'

const Trainings = () => {
  const { toggler, setToggler } = useGlobalContext()
  return (
    <main>
      <section className='container'>
        <div className='timetable'>
          <h1 className='page-heading'>Tréninky</h1>
          <img
            src={timetable}
            alt='timetable'
            onClick={() => setToggler(!toggler)}
          />
          <FsLightbox toggler={toggler} sources={[timetable]} />
        </div>
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

export default Trainings
