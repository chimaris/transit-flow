import React from 'react'
import crossIcon from '../../assets/cross-icon.svg'
import global from '../../assets/global.svg'
import time from '../../assets/time.svg'
import safe from '../../assets/safe.svg'
import ship from '../../assets/ship.svg'
import support from '../../assets/support.svg'
import pricing from '../../assets/pricing.svg'

const WhyChoose = () => {
  return (
    <div className='flex w-full relative'>
        <div className='bg-[#091242] w-1/2'>
            
        </div>
        <div className='flex flex-col gap-4 w-1/2 bg-[#F4F4F4] py-[100px] pl-28 pr-12'>
                <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[120px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>Why Choose</h3>
                <h2 className='text-[#1C1F35] text-[32px] font-semibold w-[400px]' style={{fontFamily: 'Rubik'}}>We create opportunity to reach potential</h2>
                <p className='text-[#666C89] w-[450px]'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
                <div className='grid gap-4 grid-cols-2 grid-rows-3 text-[#1C1F35]'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={safe} alt="safe" />
                        </div>
                        <div>
                            <p>Safe Package </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={ship} alt="money" />
                        </div>
                        <div>
                            <p>Ship Everyware </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={global} alt="global" />
                        </div>
                        <div>
                            <p>Global Tracking </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={support} alt="support" />
                        </div>
                        <div>
                            <p>24/7 Support </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={time} alt="time" />
                        </div>
                        <div>
                            <p>In Time Delivery </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={pricing} alt="pricing" />
                        </div>
                        <div>
                            <p>Transparant Pricing </p>
                        </div>
                    </div>
                </div>
        </div>
        <div className="absolute bg-[url('/airplane1.svg')] w-[850px] h-[430px] bg-no-repeat bg-contain left-28 top-32 pt-[324px] pl-48">
                <div className='flex items-center bg-white w-[280px] gap-4 p-3' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <img src={crossIcon} alt="Cross border icon" />
                    <p>Moving your products across borders</p>
                </div>
            </div>
    </div>
  )
}

export default WhyChoose