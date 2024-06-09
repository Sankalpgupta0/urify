import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
const GetStarted = () => {
  const isDark = useSelector(state => state.themeReducer.isDark)
  return (
    <div className=' w-screen h-screen flex justify-center items-center relative overflow-hidden'>
      <img src="/Star 1.png" alt="" className='top-[50px] right-[50px] absolute'/>
      <img src="/Star 2.png" alt="" className='top-[50%] left-[50px] absolute'/>
      <img src="/Ellipse 1.png" alt="" className=' absolute top-[-50px] z-[-1] left-[-50px]'/>
      <img src="/Ellipse 2 copy.png" alt="" className=' absolute top-0 left-[-50px] z-[-2]'/>
      <div className={`w-4/5 max-md:w-[90%] max-md:h-4/5 h-3/5 bg-black ${isDark?"bg-gray-800" : "bg-black"} relative rounded-[8px]`}>
        
        <div className='w-full h-full relative'>
          <img src="/Ellipse 2157 copy.png" alt="" className=' absolute top-0 right-0'/>
          <img src="/Ellipse 2156.png" alt="" className=' absolute top-0 right-0'/>
          <img src="/Ellipse 2155.png" alt="" className=' absolute top-0 right-0'/>

          <img src="/Ellipse 2157 copy 2.png" alt="" className=' absolute bottom-0 left-0'/>
          <img src="/Ellipse 2156 copy.png" alt="" className=' absolute bottom-0 left-0'/>
          <img src="/Ellipse 2155 copy.png" alt="" className=' absolute bottom-0 left-0'/>

          
        </div>
        <div className=' w-1/2 h-1/2 max-md:w-full  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center  absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2'>
          <h1 className='head1 text-white text-5xl'>ready to get started?</h1>
          <p className='text-white mt-5'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
          <button className=' max-md:items-center   rounded-[8px] mt-5 w-[208px] h-[60px] bg-white text-black flex justify-center items-center gap-x-5'>
            <p>download app</p>
            <img src="/Vector.png" alt="" className='font-bold'/>
          </button>
        </div>
      </div>

    </div>
  )
}

export default GetStarted