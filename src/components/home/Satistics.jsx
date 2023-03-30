import React from 'react'

const Satistics =  () => {
  return (
    <div className='w-[80%] flex justify-around items-center mx-auto pt-80 pb-96 text-[#1C1F35]'>
            <div className='flex justify-evenly items-center gap-3'>
                <h2 className='text-5xl font-semibold'>1294</h2>
                <div className='w-[17px] h-[17px]' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}></div>
                <p className='text-xl'>Delivered Packages</p>
            </div>
            <div className='flex justify-evenly items-center gap-3'>
                <h2 className='text-5xl font-semibold'>3594</h2>
                <div className='w-[17px] h-[17px]' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}></div>
                <p className='text-xl'>Satisfied Clients</p>
            </div>
        </div>
  )
}

export default Satistics