import React from 'react'
import {motion} from 'framer-motion'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Advantages = () => {
	const constraintsRef = useRef(null)
	const isDark = useSelector(state => state.themeReducer.isDark)
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

	return (
		<div ref={constraintsRef} className='flex w-screen max-md:flex-col py-12 px-16 max-md:px-10 relative'>
			<img src="/Star 1.png"  className="absolute top-10 right-10" alt="" />
			<div className='w-1/2 max-md:w-full  ml-32 max-md:ml-0'>
				<p className=' uppercase text-xl text-[#FF5555]'>advatnages</p>
				<h1 className='head1 text-5xl'>why choose Uifry?</h1>
				<div className='flex items-center gap-x-5 mt-8 mb-4'>
					<img src="/Group 35899.png" alt="" />
					<p className='med text-xl'>clever notifications</p>
				</div>
				<p className={`text-black/60 my-3 pr-28 max-md:pr-10  ${isDark?"text-gray-300" : "text-black/60"}`}>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
			</div>
			<motion.div 
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
			className='w-1/2 max-md:w-full max-md:h-[500px] max-md:pt-20 max-md:mb-16'>
        <motion.div variants={cardVariants} className='h-full relative '>
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-5px] z-10'/>
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-25px] top-[-30px] z-10'/>
          <img src="/Ellipse 2157.png" alt="" className=' absolute right-[-45px] top-[-60px] z-10'/>
          <img src="/Ellipse 1.png" alt="" className=' absolute left-[100px] top-[0px] z-0'/>
          <img src="/Ellipse 2 copy.png" alt="" className=' absolute top-[-50px] left-[100px] z-[1]' />
          <img src="/iPhone-13-Pro-Front copy 3.png" alt="" className=' absolute z-50 right-[-50px] top-[-100px]'/>
		  <motion.img drag dragConstraints={constraintsRef} dragSnapToOrigin={true} src="/On Hold.png" alt="" className=' absolute z-[100] top-[130px] max-md:top-1/4 right-0'/>
        </motion.div>
      </motion.div>
		</div>
	) 
}

export default Advantages