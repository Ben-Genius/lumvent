import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Hero from './hero'
import Index from './LumaList'

const page = () => {
  return (
    <div className='gradient brightness-95'>
      <Header/>
    <Hero/>
      <Index/>
    
    </div>
  )
}

export default page

