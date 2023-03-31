
const Transport = () => {
  return (
    <div className='relative w-screen'>
        <div className="h-[400px] w-screen" style={{background: "linear-gradient(95deg, #FFB629 -1.19%, #FFDA56 57.78%, #FFD7A6 115.08%)"}}></div>
        <div className='flex flex-col items-center mx-auto absolute lg:left-10 xl:left-32 xl:-top-96 lg:-top-72 py-[85px] lg:w-[90%] xl:w-[80%]'>
            <h2 className='text-[#1C1F35] text-[35px] font-semibold py-6' style={{fontFamily: 'Rubik'}}>Transporting Across The World</h2>
            <div className='flex justify-between items-center text-white gap-2'>
                <div className="bg-[url('/transport1.svg')] bg-cover bg-no-repeat lg:h-[195px] lg:w-[167px] xl:h-[292px] xl:w-[230px] pl-4 lg:pt-36 xl:pt-56">
                    <h3 className='xl:text-xl lg:text-sm'>Liquid Transportation</h3>
                    <p className='text-[#FFB629] lg:text-xs xl:text-[16px]'>Premium Tankers</p>
                </div>
                <div className="bg-[url('/transport2.svg')] bg-cover bg-no-repeat lg:h-[195px] lg:w-[167px] xl:h-[292px] xl:w-[230px] pl-4 lg:pt-36 xl:pt-56">
                    <h3 className='xl:text-xl lg:text-sm'>Packaging Solutions</h3>
                    <p className='text-[#FFB629] lg:text-xs xl:text-[16px]'>Warehouse Management</p>
                </div>
                <div className="bg-[url('/transport3.svg')] bg-cover bg-no-repeat lg:h-[195px] lg:w-[167px] xl:h-[292px] xl:w-[230px] pl-4 lg:pt-36 xl:pt-56">
                    <h3 className='xl:text-xl lg:text-sm'>Contract Logistics</h3>
                    <p className='text-[#FFB629] lg:text-xs xl:text-[16px]'>Road Transportation</p>
                </div>
                <div className="bg-[url('/transport4.svg')] bg-cover bg-no-repeat lg:h-[195px] lg:w-[167px] xl:h-[292px] xl:w-[230px] pl-4 lg:pt-36 xl:pt-56">
                    <h3 className='xl:text-xl lg:text-[12px]'>Warehouse & Distribution</h3>
                    <p className='text-[#FFB629] lg:text-xs xl:text-[16px]'>Large Warehouse</p>
                </div>
                <div className="bg-[url('/transport5.svg')] bg-cover bg-no-repeat lg:h-[195px] lg:w-[167px] xl:h-[292px] xl:w-[230px] pl-4 lg:pt-36 xl:pt-56">
                    <h3 className='xl:text-xl lg:text-sm'>Specialized Transport</h3>
                    <p className='text-[#FFB629] lg:text-xs xl:text-[16px]'>Ocean Transports</p>
                </div>
            </div>
            <a href="#" className="h=[60px] w-[164px] px-10 py-5 mt-12 text-white bg-[#091242] text-base">More Work</a>
        </div>
    </div>
  )
}

export default Transport