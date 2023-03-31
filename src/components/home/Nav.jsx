import downArrow from '../../assets/down-arrow.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'


const Nav = () => {
  return (
    <div className='w-screen mx-auto h-20 text-white' style={{background:'rgba(9, 18, 66, 0.25)'}} >
      <div className='flex justify-between items-center lg:w-[90%] xl:w-[80%] mx-auto'>
              <ul className='flex items-center text-white'>
                  <li className='pr-[30px] border-r'>Home</li>
                  <li className='px-[30px] border-r'>About</li>
                  <li className='px-[30px] border-r'>Pages <img src={downArrow} alt="Down Arrow" className='inline' /></li>
                  <li className='px-[30px] border-r'>Project</li>
                  <li className='px-[30px]'>Contact</li>
              </ul>
              <div className='flex justify-between items-center gap-7'>
                <div className='flex justify-between items-center gap-6'>
                  <img src={instagram} alt="instagram" />
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={linkedin} alt="linkedin" />
                </div>
                <a className='lg:px-7 xl:px-[52px] py-7 bg-white text-[#23212A] font-semibold'>Request Quote</a>

              </div>
          </div>
    </div>
   
  )
}

export default Nav