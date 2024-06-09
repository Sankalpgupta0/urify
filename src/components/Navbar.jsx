import React from 'react'
import {motion} from 'framer-motion'
import { CiSun } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const downloadHandler = () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1CsVrbYKS5PSuwUdOK3OCqWZR0g3vBITT/view';
    link.target =' _blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const isDark = useSelector(state => state.themeReducer.isDark)
  return (
    <div className='w-[80%] h-[60px] max-md:h-[150px] my-[40px] mx-auto flex justify-between items-center overflow-hidden'>
        <ul className='h-full md:flex items-center gap-x-5'>
          <li className='h-[35px] flex items-center'>
            <img src="/Frame.png" className='h-[35px]' />
            <p className='head1 text-3xl'>Urify</p>
          </li>
          <li className='font-bold text-xl text-[#FF5555]'>Home</li>
          <li className='text-xl'>AboutUs</li>
          <li className='text-xl'>Pricing</li>
          <li className='text-xl'>Features</li>
        </ul>

      <motion.button whileHover={{scale:1.5}} className={`w-[180px] h-[60px] ${isDark?"bg-gray-500 text-black " : "bg-black text-white "} rounded-[4px] btnHover`} onClick={downloadHandler}>
        Download
      </motion.button>
      <button 
      onClick={() => dispatch(toggleTheme())}
      className='p-2 hover:bg-gray-500 rounded-full'>
        {isDark?<CiSun size={24} />: <FaRegMoon size={24}/>}
      </button>
    </div>
  )
}

export default Navbar