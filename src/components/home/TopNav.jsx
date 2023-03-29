import React from 'react'
import logo from '../../assets/Logo.svg'
import clock from '../../assets/clock.svg'
import email from '../../assets/email.svg'
import phone from '../../assets/phone.svg'


const TopNav = () => {
  return (
    <div className='bg-[#091242] w-full h-40 flex justify-around items-center text-white px-20'>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex justify-between items-center gap-10 FONT-["Krub"]'>
            <div className='flex justify-between items-center gap-4'>
                <div>
                    <img src={clock} alt="clock" />
                </div>
                <div>
                    <p>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed </p>
                </div>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <div>
                    <img src={email} alt="email" />
                </div>
                <div>
                    <p>Email <br />contact@logistics.com </p>
                </div>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <div>
                    <img src={phone} alt="phone" />
                </div>
                <div>
                    <p>Call Us <br />(00) 112 365 489 </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNav