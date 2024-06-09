import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Features from './components/Features'
import Advantages from './components/Advantages'
import Customise from './components/Customise'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'

const App = () => {
  const isDark = useSelector(state => state.themeReducer.isDark)
  return (
    <div className={`${isDark ? "bg-black text-white" : ""} overflow-x-hidden`}>
      <div className='max-md:hidden'>
        <img src="/Star 1.png" alt="" className=' absolute top-20 right-10'/>
        <img src="/Star 3.png" alt="" className=' absolute top-36 left-10'/>
      </div>
      <div className='flex items-center justify-center w-screen h-fit overflow-x-hidden '>
        <Navbar/>
      </div>
      <div className='w-screen h-fit'>
        <Landing/>
      </div>
      <Features/>
      <Advantages/>
      <Customise/>
      <Testimonial/>
      <FAQ/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App