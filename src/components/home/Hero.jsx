import Button from "../ui/Button"


const Hero = () => {
  return (
    <div className="w-[90%] lg:w-[90%] xl:w-[80%] mx-auto mt-[150px]">
      <div className="flex flex-col gap-4 lg:w-[571px]" style={{fontFamily:'Rubik'}}>
        <p style={{fontFamily:'Rubik', background: 'rgba(4, 28, 55, 0.5)'}} className='text-sm px-[9px] lg:py-[3px] border-l-4 border-[#FFB629] w-[250px]'>Logistics & Supply Chain Solutions</p>
        <h1 className="text-5xl lg:text-6xl font-bold font-['Rubik'] lg:leading-['71px']">Your Gateway <br /> to any Destination in the World</h1>
        <p style={{fontFamily:'Rubik'}} className='font-medium'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>

        <Button content={'Explore now'} beforeBgColor='before:bg-white' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",color:'#23212A', width:'196px'}}/>
    </div>
    </div>
    
  )
}

export default Hero