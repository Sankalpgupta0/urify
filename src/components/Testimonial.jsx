import React,{useState} from 'react'
import {motion} from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';

const Testimonial = () => {
  const [onHover, setOnHover] = useState(false)
  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const isDark = useSelector(state => state.themeReducer.isDark)
  return (
    <div className='w-screen min-h-screen mt-12 mx-2 overflow-x-hidden overflow-y-hidden'>
      <div className='flex items-center justify-center flex-col'>
        <p className='text-xl uppercase'>testimonial</p>
        <h1 className='head1 text-5xl'>what our users say about us?</h1>
      </div>
      <div className='w-sceen min-h-screen flex max-md:flex-col'>
        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className='w-1/2 max-md:w-full h-[500px] mt-10 pr-32'>
            <motion.div variants={cardVariants} className='w-full h-screen relative'>
              <img src="/Star 3.png" className=' absolute top-1/2 left-0' alt="" />
              <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-5px]  z-10'/>
              <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-25px] top-[-30px] z-10'/>
              <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-45px] top-[-60px] z-10'/>
              <img src="/Ellipse 1.png" alt="" className=' absolute left-[200px] top-[0px] z-0 max-md:left-[50px]'/>
              <img src="/Ellipse 2 copy.png" alt="" className=' absolute top-[-50px] left-[200px] z-[1] max-md:top-[50px] max-md:left-[50px]' />
                {/* <div className=' max-md:shrink-[80px] '> */}
                  <img src="/Ellipse 41.png" alt="" className=' absolute top-[5%] left-[200px] z-10 max-md:left-[100px] max-sm:left-[50px]' />
                  <img src="/Ellipse 42.png" alt="" className='max-md:left-[-50px] absolute top-[-50px] left-[50px] z-10 max-sm:left-[0px]' />
                  <img src="/Ellipse 43.png" alt="" className='max-md:right-[-200px] absolute top-[-50px] right-[-100px] z-10 max-sm:left-[150px]' />
                  <img src="/Ellipse 44.png" alt="" className=' absolute bottom-[30%] right-[-100px] z-10 max-md:right-[-200px] max-sm:left-[0px] max-sm:top-[150px]' />
                  <img src="/Ellipse 45.png" alt="" className=' absolute bottom-[30%]  left-[100px] z-10 max-md:left-[-50px] max-sm:left-[150px] max-sm:top-[150px]' />
                {/* </div> */}
            </motion.div>
          </motion.div>

          <div className='w-1/2 max-md:w-full max-md:h-screen px-16 flex flex-col mt-36 '>
            <p className='med text-xl'>the best financial accounting app ever!</p>
            <p className={` mt-5 ${isDark?"text-gray-300" : "text-black/60"}`}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
            <div className={`${onHover?"":"hidden"} mr-10 absolute mt-10 max-md:mt-16 bg-gray-300 p-5 rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] text-black`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt tempora perspiciatis sed magnam? Vitae placeat veritatis earum blanditiis, culpa eligendi pariatur nam optio numquam sint ullam quas. Nesciunt, voluptate.
            </div>
            <div className='flex gap-x-5  flex-wrap'>
              <img src="/Group 27.png" alt="" className={`mt-10 aspect-square cursor-pointer ${onHover?"blur-sm " : "blur-0"}`} />
              <img src="/Group 28.png" alt="" className='mt-10 aspect-square blur-sm hover:blur-0 cursor-pointer' onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}/>
              <img src="/Group 29.png" alt="" className='mt-10 aspect-square blur-sm hover:blur-0 cursor-pointer' onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}/>
              <img src="/Group 30.png" alt="" className='mt-10 aspect-square blur-sm hover:blur-0 cursor-pointer' onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}/>
              <img src="/Group 31.png" alt="" className='mt-10 aspect-square blur-sm hover:blur-0 cursor-pointer' onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Testimonial