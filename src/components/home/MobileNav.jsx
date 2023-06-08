import { useState } from 'react'
import downArrow from '../../assets/down-arrow.svg'
import logo from '../../assets/Logo.svg'
import {FaBars} from 'react-icons/fa'


const MobileNav = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full mx-auto h-20 text-white lg:hidden relative' style={{background:'rgba(9, 18, 66, 0.25)'}} >
        <div className='flex justify-between items-center p-5'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <FaBars className='text-3xl' onClick={() => setToggle(!toggle)}/>
        </div>
        {toggle && 
            <div className='w-full mx-auto absolute top-20' style={{background:'rgba(9, 18, 66, 0.25)'}}>
                    <ul className='flex flex-col gap-2 justify-center items-center text-white pb-5 '>
                        <li className=''>Home</li>
                        <li className=''>About</li>
                        <li className=''>Pages <img src={downArrow} alt="Down Arrow" loading="lazy" className='inline' /></li>
                        <li className=''>Project</li>
                        <li className=''>Contact</li>
                    </ul>
            </div>
        }
    </div>
   
  )
}

export default MobileNav