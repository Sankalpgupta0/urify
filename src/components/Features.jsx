import React from 'react'
import { useRef } from 'react'
import {motion} from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';

const Features = () => {
  const scrollRef = useRef(null)
  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const isDark = useSelector(state => state.themeReducer.isDark)
  return (
    <div  ref={scrollRef} className='flex max-md:flex-col-reverse overflow-hidden  py-16 max-md:pr-10  w-screen '>
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className='w-1/2 max-md:w-full max-md:h-[600px] max-md:pt-20'>
        <motion.div variants={cardVariants} className='h-full relative'>
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-5px] z-10'/>
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-25px] top-[-30px] z-10'/>
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-45px] top-[-60px] z-10'/>
          <img src="/Ellipse 1.png" alt="" className=' absolute left-[100px] top-[0px] z-0'/>
          <img src="/Ellipse 2 copy.png" alt="" className=' absolute top-[-50px] left-[100px] z-[1]' />
          <img src="/Star 2.png" alt="" className=' absolute top-[0px] left-[150px]'/>
          <img src="/iPhone-13-Pro-Front copy 2.png" alt="" className=' absolute z-50 right-[-50px] top-[-100px]'/>
        </motion.div>
      </motion.div>
      <div className='w-1/2 max-md:w-full mx-20 max-md:mx-10'>
        <p className='text-xl text-[#FF5555] uppercase'>features</p>
        <h1 className='head1 text-5xl'>uifry premium</h1>
        <div className='my-10'>
          <div className='flex'>
            <img src="/star-05.png" alt="" />
            <p className='med ml-5 text-xl'>budgeting intervals</p>
          </div>
          <p className={` ${isDark?"text-gray-300" : "text-black/60"} my-3`}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className='my-10'>
          <div className='flex'>
            <img src="/cube-02.png" alt="" />
            <p className='med ml-5 text-xl'>budgeting intervals</p>
          </div>
          <p className={` ${isDark?"text-gray-300" : "text-black/60"} my-3`}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className='my-10'>
          <div className='flex'>
            <img src="/cube-04.png" alt="" />
            <p className='med ml-5 text-xl'>budgeting intervals</p>
          </div>
          <p className={` ${isDark?"text-gray-300" : "text-black/60"} my-3`}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
      </div>
    </div>
  )
}

export default Features