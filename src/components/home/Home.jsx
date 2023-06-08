import { 
  About, Contact, Header, News, 
  Satistics, Services, Team, 
  Testimonial, Transport, WhyChoose, Footer } from './'

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