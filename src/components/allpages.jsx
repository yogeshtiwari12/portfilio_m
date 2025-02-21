import React from 'react'
import Navbar from './navbar'
import Mepage from './mepage'
import Whattodo from './whattodo'
import Testimonials from './testimonials'
import Client from './client'

function Allpages() {
  return (
    <div>
      <Navbar/>
      <Mepage/>
      <Whattodo/>
      <Testimonials/>
      <Client/>
    </div>
  )
}

export default Allpages
