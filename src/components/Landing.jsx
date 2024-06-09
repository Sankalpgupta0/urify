import React from 'react'
import {motion} from 'framer-motion'
import StyleComp1 from './StyleComp1'
import StyleComp2 from './StyleComp2'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Landing = () => {
  const isDark = useSelector(state => state.themeReducer.isDark)
  const scrollRef = useRef(null)
  return (
    <div ref={scrollRef} className='md:flex min-h-screen w-full pt-32 pb-16 px-10 max-md:px-2 overflow-x-hidden overflow-y-scroll '>
      
      <div className='w-1/2 ml-32 relative max-md:w-full max-md:h-screen max-md:ml-0'>
        <img src="Ellipse 1.png" alt="" className=' absolute top-[-11.25rem] z-[-5] right-0' />
        <img src="Ellipse 2 copy.png" alt="" className=' absolute top-[-120px] z-[-10] right-0' />
        <h1 className='text-6xl font-bold capitalize head1'>make the best financial decisions</h1>
        <p className='py-10 para pr-10 max-md:pr-0'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        <div className='w-full h-[3.75rem] flex items-center gap-x-10'>
          <motion.button  whileHover={{scale:1.5}} className={` ${isDark?"bg-gray-500 text-black " : "bg-black text-white "} w-[11.25rem] h-[3.75rem] bg-black text-white rounded-[4px] flex justify-center items-center gap-x-2 btnHover`}>
            Get Started
            <img src="/Vector 1.png" alt="" />
          </motion.button>
          <div className='gap-x-5 flex justify-center items-center'>
            <img src="/Group 3.png" alt="" className='' />
            <p>Watch Video</p>
          </div>
        </div>
        <motion.div
        initial={{ scale: 0.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 1}}
      >
          <StyleComp1 />
          </motion.div>
      </div>
      {/* <div>  */}
      <motion.div
      className='w-1/2 max-md:w-full max-md:h-screen   flex justify-center items-start '
        initial={{ scale: 0.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 1}}
      >
          <StyleComp2 />
          </motion.div>
      {/* </div> */}
    </div>
  )
}

export default Landing