import React from 'react'
import { useRef } from 'react'
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';

const Customise = () => {
	const constraintsRef = useRef(null)
  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
			// scale:0.8,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const isDark = useSelector(state => state.themeReducer.isDark)
  return (
	<motion.div className=' overflow-hidden pt-36 max-md:pt-0 px-36 max-md:px-2 w-screen h-screen flex max-md:flex-col-reverse' ref={constraintsRef}>
		<motion.div
		initial="offscreen"
		whileInView="onscreen"
		viewport={{ once: true, amount: 0.8 }}
		className='w-1/2 max-md:w-full max-md:h-full max-md:pt-12 pt-36'>
        <motion.div variants={cardVariants} className='h-full w-full relative'>
          <img src="/Star 3.png" className=' absolute top-0 right-0' alt="" />
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-5px] z-10'/>
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-25px] top-[-30px] z-10'/>
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-45px] top-[-60px] z-10'/>
          <img src="/Ellipse 1.png" alt="" className=' absolute left-[100px] top-[0px] z-0'/>
          <img src="/Ellipse 2 copy.png" alt="" className=' absolute top-[-50px] left-[100px] z-[1]' />
          <img src="/iPhone-13-Pro-Front copy 2.png" alt="" className=' absolute z-50 right-[-50px] top-[-100px]'/>
						<motion.img drag dragConstraints={constraintsRef} dragSnapToOrigin={true} src="/Group.png" alt="" className=' w-[14.375rem] absolute z-50 right-16 top-10' />
        </motion.div >	
		</motion.div>
		<div className=' w-1/2 max-md:w-full  flex flex-col justify-center px-16 max-md:px-2'>
			<div className='flex items-center'>
				<img src="/Group 35899 copy.png" alt="" />
				<p className='head1 text-3xl ml-10'>fully customizable</p>
			</div>
			<p className={`${isDark?"text-gray-300" : "text-black/60"}`}>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
		</div>
	</motion.div>
  )
}

export default Customise