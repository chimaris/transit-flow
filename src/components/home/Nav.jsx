import downArrow from '../../assets/down-arrow.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'


const Nav = () => {
  return (
    <div className='flex justify-around items-center h-20 text-white w-full' style={{background:'rgba(9, 18, 66, 0.25)'}} >
        <ul className='flex items-center text-white'>
            <li className='px-[30px] border-r'>Home</li>
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
          <a className='px-14 py-7 bg-white text-black'>Request Quote</a>

        </div>
    </div>
  )
}

export default Nav