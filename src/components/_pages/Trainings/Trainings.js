import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import './Trainings.css'
import timetable from '../../../assets/images/timetable/timetable.png'
import { useGlobalContext } from '../../../context/context'

const Trainings = () => {
  const { toggler, setToggler } = useGlobalContext()
  return (
    <main>
      <section className='container'>
        <div className='trainings'>
          <img
            src={timetable}
            alt='timetable'
            onClick={() => setToggler(!toggler)}
          />
          <FsLightbox toggler={toggler} sources={[timetable]} />
        </div>
      </section>
    </main>
  )
}

export default Trainings
