import backwardArrow from '../../assets/backward-arrow.svg'
import forwardArrow from '../../assets/forward-arrow.svg'
import colon from '../../assets/colon.svg'
import Star from '../ui/Star'
import { Testimonies } from '../../data/constant' 


const Testimonial = () => {
  return (
    <div className='w-full'>
        <div className='lg:w-[90%] xl:w-[80%] py-[80px] mx-auto'>
            <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[100px]' style={{fontFamily:'Rubik', background: 'rgba(232, 232, 232, 0.5)'}}>Testimonial</h3>
            <div className='flex justify-between'>
                <h2 className='text-[#1C1F35] text-[32px] font-semibold' style={{fontFamily: 'Rubik'}}>What Our Customer Say</h2>
                <div className='flex gap-2'>
                    <img src={backwardArrow} alt="backward arrow"/>
                    <img src={forwardArrow} alt="forward arrow" />
                </div>
            </div>
            <div className='flex mt-10'>
                {Testimonies.map((testimony,index) => (
                    <div className={`py-16 px-12 gap-8 ${index % 2 === 0 ? 'bg-[#F4F4F4]' : 'bg-[#091242] text-white'}`}>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src={testimony.img} alt={testimony.name} className='rounded-full' />
                            <h2 className='text-xl'>{testimony.name}<br /> <span className='text-base'>{testimony.company}</span></h2>
                        </div>
                        <img src={colon} alt="colon" />
                    </div>
                    <div>
                        <p className={`italic my-4 text-justify ${index % 2 === 0 ? 'text-[#666C89]' : 'text-white'}`}>{testimony.content}</p>
                    </div>
                    <Star/>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonial