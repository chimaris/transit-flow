import clock from '../../assets/clock.svg'
import email from '../../assets/email.svg'
import phone from '../../assets/phone.svg'

const Contact = () => {
  return (
    <div className='w-full bg-[#091242] text-white p-32'>
        <div className='w-[90%] mx-auto'>
            <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[100px]' style={{fontFamily:'Rubik'}}>Contact</h3>
            <div className='flex justify-between pt-8 gap-12'>
                <div className='w-[46%] flex flex-col gap-4'>
                    <h2 className='text-[32px] font-semibold' style={{fontFamily: 'Rubik'}}>Get in touch with us</h2>
                    <p className=''>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                    <div className='font-["Krub"] flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <img src={clock} alt="clock" />
                            </div>
                            <div>
                                <p>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <img src={email} alt="email" />
                            </div>
                            <div>
                                <p>Email <br />contact@logistics.com </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <img src={phone} alt="phone" />
                            </div>
                            <div>
                                <p>Call Us <br />(00) 112 365 489 </p>
                            </div>
                        </div>
                </div>
                </div>
               <div className=''>
                <form>
                    <div className='grid gap-4 grid-cols-2 grid-rows-3 text-white'>
                        <input type="text" placeholder='Your name*' className='bg-transparent border border-[#4E5683] py-4 px-7' />
                        <input type="email" placeholder='Email*' className='bg-transparent border border-[#4E5683] py-4 px-7' />
                        <input type="phone" placeholder='Phone Number*' className='bg-transparent border border-[#4E5683] py-4 px-7' />
                        <input type="text" placeholder='City*' className='bg-transparent border border-[#4E5683] py-4 px-7' />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='block h-[154px] w-full bg-transparent border border-[#4E5683] py-4 px-7'></textarea>
                    <button className="h=[60px] px-12 py-5 text-[#23212A] my-8" style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>Submit Message</button>
                </form>
               </div>
            </div>
            <div className='flex'>
                <div className="bg-[url('/norto.svg')] bg-cover bg-center bg-no-repeat lg:w-[222px] xl:w-[299px] h-[234px] px-16 py-24"><h1 className='text-4xl'>NORTO</h1></div>
                <div className="bg-[url('/norto.svg')] bg-cover bg-center bg-no-repeat lg:w-[222px] xl:w-[299px] h-[234px] px-16 py-24"><h1 className='text-4xl'>NORTO</h1></div>
                <div className="bg-[url('/norto.svg')] bg-cover bg-center bg-no-repeat lg:w-[222px] xl:w-[299px] h-[234px] px-16 py-24"><h1 className='text-4xl'>NORTO</h1></div>
                <div className="bg-[url('/norto.svg')] bg-cover bg-center bg-no-repeat lg:w-[222px] xl:w-[299px] h-[234px] px-16 py-24"><h1 className='text-4xl'>NORTO</h1></div>
            </div>
        </div>
    </div>
  )
}

export default Contact