import React from 'react'


const StyleComp1 = () => {
  
  return (
    <div className='w-full h-[11.875rem] relative my-[9.375rem] '>
      <img src="/Star 8.png" alt="" className=' absolute left-36' />
      <div className='w-[33.438rem] h-[4.5rem] bg-black z-10 rounded-tr-[8px] rounded-br-[8px] rotate-[-28deg] absolute top-0 right-0 flex px-5'>
      <p className='text-[6.668rem] head1 absolute bottom-[-46px] left-[-50px] '>A</p>
        <div className='flex items-center'>
          <img src="/Group 35907.png" alt="" />
          <div className='text-white'>
            <p className=' font-semibold'>Achievements</p>
            <p className=' font-thin text-xs text-nowrap'>best finance app on playstore</p>
          </div>
          <hr className=' text-white bg-white h-16 w-[0.5px] ml-10 mr-5 rotate-[28deg]'/>
          <div className='flex items-center'>
            <img src="/Group 35908.png" alt="" />
            <div className='text-white'>
            <p className=' font-semibold'>finance</p>
            <p className=' font-thin text-xs text-nowrap'>most popular accounting app</p>
          </div>
          </div>
        </div>
      </div>
      <div className='w-[22.063rem] h-[4.5rem] bg-[#FF5555] rotate-[-45deg] absolute top-2 right-0 z-[5] rounded-bl-[8px] rounded-tl-[8px] font-extrabold text-sm flex items-center justify-center shadow-lg ' >
        make the best financial decisions
      </div>
      <div className='w-[16.063rem] h-[4.438erm] z-[0] flex bg-[#FF5555] absolute right-5 bottom-[0px]'>
        <hr className='bg-black h-full w-[0.8px] z-10 ml-16'/>
        <img src="/Star 7.png" alt="" className='p-5' />
        <hr className='bg-black h-full w-[0.8px] z-10'/>
        <div className='px-3 py-2 text-xs flex-col flex justify-center'>
          <p className='head1'>Uifry Premium</p>
          <p>free trial</p>
        </div>
      </div>
    </div>
  )
}

export default StyleComp1