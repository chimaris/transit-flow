import Hero from './Hero'
import MobileNav from './MobileNav'
import Nav from './Nav'
import TopNav from './TopNav'

const Header = () => {
  return (
    <>
        <TopNav/>
        <div className="bg-[url('/hero.svg')] h-[800px] bg-cover bg-center bg-no-repeat text-white w-full">
          <Nav/>
          <MobileNav/>
          <Hero/>
        </div>
    </>
  )
}

export default Header