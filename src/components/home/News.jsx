import React from 'react'
import blog1 from '../../assets/blog1.svg'
import date from '../../assets/date.svg'

const News = () => {
  return (
    <div className='my-16 w-[70%] mx-auto'>
        <div className='flex flex-col items-center gap-3'>
            <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[80px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>Our Blog</h3>
            <h2 className='text-[#1C1F35] text-[32px] font-semibold w-[400px] text-center' style={{fontFamily: 'Rubik'}}>Our Latest News</h2>
        </div>
        <div className='text-[#1C1F35] my-10'>
            <div className='flex justify-around py-9 border-y border-[#D6D6D6]'>
                <div className='w-[100%] h-[100%]'>
                    <img src={blog1} alt="blog picture" width='100%' height='100%' />
                </div>
                <div className='flex flex-col items-center px-4'>
                    <img src={date} alt="date icon" />
                    <h1 className='text-[40px] font-semibold' style={{lineHeight: '40px'}}>08</h1>
                    <p className='text-[#666C89]'>September</p>
                </div>
                <div className='pl-7 flex flex-col gap-2 border-l border-[#D6D6D6]'>
                    <h2 className='text-[25px]'>Inland freight a worthy solution for your business</h2>
                    <p className='text-[#666C89]'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                    <ul className='list-disc list-inside'>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-around py-9 border-b border-[#D6D6D6]'>
                <div className='w-[100%] h-[100%]'>
                    <img src={blog1} alt="blog picture" width='100%' height='100%' />
                </div>
                <div className='flex flex-col items-center px-4'>
                    <img src={date} alt="date icon" />
                    <h1 className='text-[40px] font-semibold' style={{lineHeight: '40px'}}>12</h1>
                    <p className='text-[#666C89]'>September</p>
                </div>
                <div className='pl-7 flex flex-col gap-2 border-l border-[#D6D6D6]'>
                    <h2 className='text-[25px] text-[#FFBE34]'>How technology can help redraw the supply chain</h2>
                    <p className='text-[#666C89]'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                    <ul className='list-disc list-inside'>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-around py-9 border-b border-[#D6D6D6]'>
                <div className='w-[100%] h-[100%]'>
                    <img src={blog1} alt="blog picture" width='100%' height='100%' />
                </div>
                <div className='flex flex-col items-center px-4'>
                    <img src={date} alt="date icon" />
                    <h1 className='text-[40px] font-semibold' style={{lineHeight: '40px'}}>25</h1>
                    <p className='text-[#666C89]'>September</p>
                </div>
                <div className='pl-7 flex flex-col gap-2 border-l border-[#D6D6D6]'>
                    <h2 className='text-[25px]'>Five things you should have ready for your broker</h2>
                    <p className='text-[#666C89]'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                    <ul className='list-disc list-inside'>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </ul>
                </div>
            </div>
            <a href="#" className="h=[60px] w-[164px] px-10 py-5 text-white bg-[#091242] block mx-auto my-5">More Blog</a>
        </div>
    </div>
  )
}

export default News