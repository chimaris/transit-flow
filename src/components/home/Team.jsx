import team1 from '../../assets/team1.svg'
import team2 from '../../assets/team2.svg'
import team3 from '../../assets/team3.svg'

const Team = () => {
  return (
    <div className='my-16 w-full'>
        <div className='flex flex-col items-center gap-3'>
            <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[150px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>The Transporters</h3>
            <h2 className='text-[#1C1F35] text-[32px] font-semibold w-[400px] text-center' style={{fontFamily: 'Rubik'}}>Meet Expert Team</h2>
        </div>
        
        <div className='lg:w-[90%] xl:w-[80%] mx-auto my-4 flex gap-14'>
            <div className='w-[364px] lg:h-[429px] xl:h-[467px] relative'>
                <img src={team1} alt="team1" loading="lazy" />
                <div className='bg-[#1C1F35] text-white h-[112px] pt-10 pl-8'>
                    <h3 className='text-xl'>Jessca Arow <br /> <span className='text-base'>Designer</span></h3>
                </div>
                <div className='absolute p-5 lg:bottom-20 xl:bottom-20 right-0 flex justify-between gap-4' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <ion-icon name="logo-twitter" style={{color:'#1C1F35', fontSize:'30px' }}></ion-icon>
                    <ion-icon name="logo-facebook" style={{color:'#1C1F35', fontSize:'30px'}}></ion-icon>
                    <ion-icon name="logo-instagram" style={{color:'#1C1F35', fontSize:'30px'}}></ion-icon>
                </div>
            </div>
            <div className='w-[364px] lg:h-[429px] xl:h-[467px] relative'>
                <img src={team2} alt="team1" loading="lazy" />
                <div className='bg-[#1C1F35] text-white h-[112px] pt-10 pl-8'>
                    <h3 className='text-xl'>Kathleen Smith <br /> <span className='text-base'>Designer</span></h3>
                </div>
                <div className='absolute p-5 lg:bottom-20 xl:bottom-20 right-0 flex justify-between gap-4' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <ion-icon name="logo-linkedin" style={{color:'#1C1F35', fontSize:'30px'}}></ion-icon>
                    <ion-icon name="logo-twitter" style={{color:'#1C1F35', fontSize:'30px' }}></ion-icon>
                    <ion-icon name="logo-facebook" style={{color:'#1C1F35', fontSize:'30px'}}></ion-icon>
                    <ion-icon name="logo-instagram" style={{color:'#1C1F35', fontSize:'30px'}}></ion-icon>
                </div>
            </div>
            <div className='w-[364px] lg:h-[429px] xl:h-[467px] relative'>
                <img src={team3} alt="team1" loading="lazy" />
                <div className='bg-[#1C1F35] text-white h-[112px] pt-10 pl-8'>
                    <h3 className='text-xl'>Rebecca Tylor <br /> <span className='text-base'>Designer</span></h3>
                </div>
                <div className='absolute p-5 lg:bottom-20 xl:bottom-20 right-0 flex justify-between gap-4' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <ion-icon name="logo-instagram" style={{color:'#1C1F35', fontSize:'30px'}}></ion-icon>
                    <ion-icon name="logo-facebook" style={{color:'#1C1F35', fontSize:'30px'}}></ion-icon>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Team