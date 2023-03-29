import React from 'react'
import clock from '../../assets/clock.svg'
import airplane from '../../assets/airplane.svg'

const About = () => {
  return (
    <div>
        <div className="bg-[url('/about-background.svg')] h-[504px] bg-contain bg-no-repeat"></div>
        <div className='flex justify-center'>
            <div>
                <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[100px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>Why Us</h3>
                <h2 className='text-[#1C1F35] text-[32px] font-semibold' style={{fontFamily: 'Rubik'}}>We provide full range global logistics solution</h2>
                <p className='text-[#666C89]'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. <br /><br /> Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <div className='flex justify-between items-center gap-4'>
                    <div>
                        <img src={clock} alt="clock" />
                    </div>
                    <div>
                        <p>Delivery on Time </p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div>
                        <img src={clock} alt="clock" />
                    </div>
                    <div>
                        <p>Optimized Travel Cost </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={airplane} alt="Airplane" />
            </div>
        </div>
    </div>
  )
}

export default About