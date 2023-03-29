import React from 'react'
import sea from '../../assets/sea.svg'
import warehouse from '../../assets/warehouse.svg'
import flight from '../../assets/flight.svg'
import bus from '../../assets/bus.svg'

const Services = () => {
  return (
    <div className='px-20 my-24'>
        <div className='flex justify-center mx-20 gap-10'>
            <div className='w-[294px]'>
                <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[100px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>What We Do</h3>
                <h2 className='text-[#1C1F35] text-[32px] font-semibold' style={{fontFamily: 'Rubik'}}>Safe & Reliable Cargo Solutions</h2>
            </div>
            <div className='grid gap-16 grid-cols-2 grid-rows-2 w-[873px]'>
                <div className='flex gap-10'>
                    <div>
                        <img src={sea} alt='sea' />
                    </div>
                    <div>
                        <h2 className='text-[#1C1F35] text-2xl'>Sea Transport Services</h2>
                        <p className='text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div>
                        <img src={warehouse} alt="warehouse" />
                    </div>
                    <div>
                        <h2 className='text-[#1C1F35] text-2xl'>Warehousing Services</h2>
                        <p className='text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div>
                        <img src={flight} alt="flight" />
                    </div>
                    <div>
                        <h2 className='text-[#1C1F35] text-2xl'>Air Fright Services</h2>
                        <p className='text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div>
                        <img src={bus} alt="bus" />
                    </div>
                    <div>
                        <h2 className='text-[#1C1F35] text-2xl'>Local Shipping Services</h2>
                        <p className='text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    
  )
}

export default Services