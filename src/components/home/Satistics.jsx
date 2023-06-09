
const Satistics =  () => {
  return (
    <div className='w-[90%] flex flex-col lg:flex-row items-center mx-auto justify-center lg:mt-80 xl:mt-[600px] lg:mb-[400px] text-[#1C1F35]'>
            <div className='flex justify-evenly items-center gap-3 py-11 px-2 lg:px-10 xl:px-24 border-y border-r border-[#D4D4D4]'>
                <h2 className='text-5xl font-semibold'>1294</h2>
                <div className='w-[17px] h-[17px]' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}></div>
                <p className='text-xl'>Delivered Packages</p>
            </div>
            <div className='flex justify-evenly items-center gap-3 py-11 lg:px-24 border-y border-[#D4D4D4]'>
                <h2 className='text-5xl font-semibold'>3594</h2>
                <div className='w-[17px] h-[17px]' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}></div>
                <p className='text-xl'>Satisfied Clients</p>
            </div>
        </div>
  )
}

export default Satistics