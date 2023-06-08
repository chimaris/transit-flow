import sea from '../../assets/sea.svg'
import warehouse from '../../assets/warehouse.svg'
import flight from '../../assets/flight.svg'
import bus from '../../assets/bus.svg'

const Services = () => {
  return (
        <div className='flex flex-col lg:flex-row justify-center w-[90%] xl:w-[80%] mx-auto my-24'>
            <div className='w-[294px] pb-5 lg:pb-0'>
                <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[100px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>What We Do</h3>
                <h2 className='text-[#1C1F35] lg:text-[28px] xl:text-[32px] font-semibold' style={{fontFamily: 'Rubik'}}>Safe & Reliable Cargo Solutions</h2>
            </div>
            <div className='grid gap-6 grid-cols-2 grid-rows-2'>
                <div className='flex gap-1 lg:gap-10'>
                    <div>
                        <img src={sea} alt='sea' loading="lazy" />
                    </div>
                    <div className='border-l border-[#D8D8D8] pl-6 w-[320px]'>
                        <h2 className='text-[#1C1F35] lg:text-xl xl:text-2xl'>Sea Transport Services</h2>
                        <p className='text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <div className='flex gap-1 lg:gap-6'>
                    <div>
                        <img src={warehouse} alt="warehouse" loading="lazy" />
                    </div>
                    <div className='border-l border-[#D8D8D8] pl-6 w-[320px]'>
                        <h2 className='text-[#1C1F35] lg:text-xl xl:text-2xl'>Warehousing Services</h2>
                        <p className='text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <div className='flex gap-1 lg:gap-4'>
                    <div>
                        <img src={flight} alt="flight" loading="lazy" />
                    </div>
                    <div className='border-l border-[#D8D8D8] pl-6 w-[320px]'>
                        <h2 className='text-[#1C1F35] lg:text-xl xl:text-2xl'>Air Fright Services</h2>
                        <p className='text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <div className='flex gap-1 lg:gap-5'>
                    <div>
                        <img src={bus} alt="bus" loading="lazy" />
                    </div>
                    <div className='border-l border-[#D8D8D8] pl-6 w-[320px]'>
                        <h2 className='text-[#1C1F35] lg:text-xl xl:text-[20px]'>Local Shipping Services</h2>
                        <p className='text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
            </div>
        </div>      
  )
}

export default Services