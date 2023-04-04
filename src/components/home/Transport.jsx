
const Transport = () => {
  return (
    <div className='relative w-full'>
        <div className="w-full h-[400px]" style={{background: "linear-gradient(95deg, #FFB629 -1.19%, #FFDA56 57.78%, #FFD7A6 115.08%)"}}></div>
        <div className='flex flex-col items-center mx-auto absolute left-32 -top-96 py-[85px] w-[80%]'>
            <h2 className='text-[#1C1F35] text-[35px] font-semibold py-6' style={{fontFamily: 'Rubik'}}>Transporting Across The World</h2>
            <div className='flex text-white gap-2'>
                <div className="bg-[url('/transport1.svg')] bg-contain bg-no-repeat h-[380px] w-[230px] pl-4 pt-56">
                    <h3 className='text-xl'>Liquid Transportation</h3>
                    <p className='text-[#FFB629] text-[16px]'>Premium Tankers</p>
                </div>
                <div className="bg-[url('/transport2.svg')] bg-contain bg-no-repeat h-[380px] w-[230px] pl-4 pt-56">
                    <h3 className='text-xl'>Packaging Solutions</h3>
                    <p className='text-[#FFB629] text-[16px]'>Warehouse Management</p>
                </div>
                <div className="bg-[url('/transport3.svg')] bg-contain bg-no-repeat h-[380px] w-[230px] pl-4 pt-56">
                    <h3 className='text-xl'>Contract Logistics</h3>
                    <p className='text-[#FFB629] text-[16px]'>Road Transportation</p>
                </div>
                <div className="bg-[url('/transport4.svg')] bg-contain bg-no-repeat h-[380px] w-[230px] pl-4 pt-56">
                    <h3 className='text-lg'>Warehouse & Distribution</h3>
                    <p className='text-[#FFB629] text-[16px]'>Large Warehouse</p>
                </div>
                <div className="bg-[url('/transport5.svg')] bg-contain bg-no-repeat h-[380px] w-[230px] pl-4 pt-56">
                    <h3 className='text-xl'>Specialized Transport</h3>
                    <p className='text-[#FFB629] text-[16px]'>Ocean Transports</p>
                </div>
            </div>
            <a href="#" className="h=[60px] w-[164px] px-10 py-5 text-white bg-[#091242] text-base">More Work</a>
        </div>
    </div>
  )
}

export default Transport