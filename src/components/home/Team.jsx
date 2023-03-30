import React from 'react'
import team1 from '../../assets/team1.svg'
import team2 from '../../assets/team2.svg'
import team3 from '../../assets/team3.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'

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
                    <h3 className='text-xl'>Jessca Arow <br /> <span className='text-base'>Designer</span></h3>
                </div>
                <div className='absolute p-5 bottom-28 right-0 flex justify-between gap-4' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <ion-icon name="logo-twitter" style={{color:'#1C1F35', fontSize:'30' }}></ion-icon>
                    <ion-icon name="logo-facebook" style={{color:'#1C1F35', fontSize:'30'}}></ion-icon>
                    <ion-icon name="logo-instagram" style={{color:'#1C1F35', fontSize:'30'}}></ion-icon>
                </div>
            </div>
            <div className='w-[364px] h-[538px] relative'>
                <img src={team2} alt="team1" />
                <div className='bg-[#1C1F35] text-white h-[112px] pt-10 pl-8'>
                    <h3 className='text-xl'>Kathleen Smith <br /> <span className='text-base'>Designer</span></h3>
                </div>
                <div className='absolute p-5 bottom-28 right-0 flex justify-between gap-4' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <ion-icon name="logo-linkedin" style={{color:'#1C1F35', fontSize:'30'}}></ion-icon>
                    <ion-icon name="logo-twitter" style={{color:'#1C1F35', fontSize:'30' }}></ion-icon>
                    <ion-icon name="logo-facebook" style={{color:'#1C1F35', fontSize:'30'}}></ion-icon>
                    <ion-icon name="logo-instagram" style={{color:'#1C1F35', fontSize:'30'}}></ion-icon>
                </div>
            </div>
            <div className='w-[364px] h-[538px] relative'>
                <img src={team3} alt="team1" />
                <div className='bg-[#1C1F35] text-white h-[112px] pt-10 pl-8'>
                    <h3 className='text-xl'>Rebecca Tylor <br /> <span className='text-base'>Designer</span></h3>
                </div>
                <div className='absolute p-5 bottom-28 right-0 flex justify-between gap-4' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <ion-icon name="logo-instagram" style={{color:'#1C1F35', fontSize:'30'}}></ion-icon>
                    <ion-icon name="logo-facebook" style={{color:'#1C1F35', fontSize:'30'}}></ion-icon>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Team