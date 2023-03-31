import Hero from './Hero'
import Nav from './Nav'
import TopNav from './TopNav'

const Header = () => {
  return (
    <>
        <TopNav/>
        <div className="bg-[url('/hero.svg')] h-[800px] bg-cover bg-center bg-no-repeat text-white w-screen">
          <Nav/>
          <Hero/>
        </div>
    </>
  )
}

export default Header