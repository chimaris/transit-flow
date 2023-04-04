import About from './About'
import Contact from './Contact'
import Header from './Header'
import News from './News'
import Satistics from './Satistics'
import Services from './Services'
import Team from './Team'
import Testimonial from './Testimonial'
import Transport from './Transport'
import WhyChoose from './WhyChoose'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Header/>
         <Services/>
        <About/>
        <Satistics/>
        <Transport/>
        <Testimonial/>
        <WhyChoose/>
        <Team/>
        <Contact/>
        <News/>
        <Footer/>
    </>
  )
}

export default Home