import Hero from './Hero'
import Nav from './Nav'
import TopNav from './TopNav'

const Header = () => {
  return (
    <>
        <TopNav/>
        <div className="bg-[url('/hero.svg')] h-[650px] bg-contain bg-no-repeat text-white">
          <Nav/>
          <Hero/>
        </div>
    </>
  )
}

export default Header