import backwardArrow from '../../assets/backward-arrow.svg'
import forwardArrow from '../../assets/forward-arrow.svg'
import colon from '../../assets/colon.svg'
import user1 from '../../assets/user1.svg'
import user2 from '../../assets/user2.svg'
import Star from '../Star'

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
                
                <div className='py-16 px-12 bg-[#F4F4F4] gap-8'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src={user1} alt="user 1" className='rounded-full' />
                            <h2>Kathleen Smith <br /> <span>Fuel Company</span></h2>
                        </div>
                        <img src={colon} alt="colon" />
                    </div>
                    <div>
                        <p className='text-[#666C89] italic my-4 text-justify'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    </div>
                    <Star/>

                </div>

                <div className='py-16 px-12 bg-[#091242] text-white gap-8'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src={user2} alt="user 1" className='rounded-full' />
                            <h2 className='text-xl'>John Martin <br /> <span className='text-base'>Restoration Company</span></h2>
                        </div>
                        <img src={colon} alt="colon" />
                    </div>
                    <div>
                        <p className='italic my-4 text-justify'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    </div>
                    <Star/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonial