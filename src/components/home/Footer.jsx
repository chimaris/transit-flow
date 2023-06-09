import email from '../../assets/email.svg'
import phone from '../../assets/phone.svg'
import logo from '../../assets/Logo.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import Button from '../ui/Button'

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[url('/footer-background.svg')] bg-no-repeat bg-cover lg:h-[221px] xl:h-[276px]"></div>
      <div className='w-full bg-[#091242] text-[white] pb-12 mt-0'>
          <div className='flex flex-col lg:flex-row justify-between w-[90%] xl:w-[80%] m-auto'>
            <div className='w-[319px]'>
              <img src={logo} alt="" className='mb-8 py-11' loading="lazy" />
              <div className='flex flex-col gap-4'>
                <p>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                <div className='font-["Krub"] flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <div>
                          <img src={email} alt="email" loading="lazy" />
                        </div>
                        <div>
                          <p>Email <br />contact@logistics.com </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                          <img src={phone} alt="phone" loading="lazy" />
                        </div>
                        <div>
                          <p>Call Us <br />(00) 112 365 489 </p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className='mb-8 py-11 text-[25px] font-medium'>Pages</h2>
              <ul className='flex flex-col gap-4'>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Our Product</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2 className='mb-8 py-11 text-[25px] font-medium'>Utility</h2>
              <ul className='flex flex-col gap-4'>
                <li>Style Guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>Protected</li>
                <li>Not Found</li>
              </ul>
            </div>
            <div className='w-[319px]'>
              <h2 className='mb-8 py-11 text-[25px] font-medium'>Subscribe</h2>
              <form>
                <input type="email" placeholder='Email*' className='bg-transparent border border-[#4E5683] py-4 px-7 w-full' />
                <div className='flex justify-between items-center gap-6'>
                <Button content={'Send Now'} beforeBgColor='before:bg-white' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)", color:'#23212A', margin:'32px 0'}}/>
                  <div className='flex justify-between items-center gap-4'>
                    <img src={linkedin} alt="linkedin" loading="lazy" />
                    <img src={twitter} alt="twitter" loading="lazy" />
                    <img src={facebook} alt="facebook" loading="lazy" />
                </div>
                </div>
              </form>
            </div>
            </div>
            
          </div>
          <div className='w-full bg-[#091242] text-[white] border-t border-[#4E5683]'>
            <div className='flex flex-col-reverse lg:flex-row justify-between gap-2 lg:w-[90%] xl:w-[80%] m-auto px-2 lg:px-0 py-4'>
                <p className='text-xs text-center lg:text-left lg:text-base'>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
                <ul className='text-[#8388A7] flex gap-4'>
                  <li>Style Guide</li>
                  <li>Licenses</li>
                  <li>Changelog</li>
                  <li>Password</li>
                </ul>
              </div>
          </div>
    </>
  )
}

export default Footer