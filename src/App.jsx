import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <main className='h-full w-full'>
      <Navbar />
      <Hero />
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Footer/>
      </main>
    </>
  )
}

export default App
