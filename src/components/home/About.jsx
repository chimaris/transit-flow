import airplane from '../../assets/airplane.svg'
import time from '../../assets/time.svg'
import money from '../../assets/money.svg'
import lady from '../../assets/lady.svg'

const About = () => {
  return (
    <div className='relative w-screen'>
        <div className="bg-[url('/about-background.svg')] h-[504px] lg:bg-contain xl:bg-cover bg-no-repeat"></div>
        <div className='flex justify-center w-[90%] lg:gap-10 xl:gap-24 absolute lg:left-[65px] xl:left-[75px] lg:top-40 xl:top-96 bg-white lg:px-7 lg:py-20 xl:p-[85px]'>
            <div className='lg:w-[644px] xl:w-[559px] flex flex-col gap-2'>
                <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[100px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>Why Us</h3>
                <h2 className='text-[#1C1F35] text-[32px] font-semibold' style={{fontFamily: 'Rubik'}}>We provide full range global logistics solution</h2>
                <p className='text-[#666C89] lg:text-sm'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. <br />Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={time} alt="time" />
                    </div>
                    <div>
                        <p>Delivery on Time </p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={money} alt="money" />
                    </div>
                    <div>
                        <p>Optimized Travel Cost </p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[575px] xl:w-[482px]'>
                <img src={airplane} alt="Airplane" className='object-cover' />
            </div>
            <img src={lady} alt="lady" className='absolute lg:right-[240px] xl:right-[320px] lg:bottom-5 xl:bottom-10' />
        </div>
    </div>
  )
}

export default About