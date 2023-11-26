import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Hero from './hero'
import styles from './styles.module.css'

const page = () => {
  return (
    <div className={`${styles.gradient} brightness-95`}>
      <Header/>
      <Hero/>
    </div>

  )
}

export default page

