import React from 'react'
import team1 from '../../assets/team1.svg'
import team2 from '../../assets/team2.svg'
import team3 from '../../assets/team3.svg'

const Team = () => {
  return (
    <div className='my-16'>
        <div className='flex flex-col items-center gap-3'>
            <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[150px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>The Transporters</h3>
            <h2 className='text-[#1C1F35] text-[32px] font-semibold w-[400px] text-center' style={{fontFamily: 'Rubik'}}>Meet Expert Team</h2>
        </div>
        
        <div className='w-[80%] mx-auto my-4 flex gap-14'>
            <div className='w-[364px] h-[538px] relative'>
                <img src={team1} alt="team1" />
                <div className='bg-[#1C1F35] text-white h-[112px] pt-10 pl-8'>
                    <h3>Jessca Arow <br /> <span>Designer</span></h3>
                </div>
                <div className='absolute p-5 bottom-20 right-0' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <h1>hello world</h1>
                </div>
            </div>
            <div className='w-[364px] h-[538px] relative'>
                <img src={team2} alt="team1" />
                <div className='bg-[#1C1F35] text-white h-[112px] pt-10 pl-8'>
                    <h3>Kathleen Smith <br /> <span>Designer</span></h3>
                </div>
                <div className='absolute p-5 bottom-20 right-0' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <h1>hello world</h1>
                </div>
            </div>
            <div className='w-[364px] h-[538px] relative'>
                <img src={team3} alt="team1" />
                <div className='bg-[#1C1F35] text-white h-[112px] pt-10 pl-8'>
                    <h3>Rebecca Tylor <br /> <span>Designer</span></h3>
                </div>
                <div className='absolute p-5 bottom-20 right-0' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <h1>hello world</h1>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Team