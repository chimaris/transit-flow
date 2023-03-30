

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 w-[571px] h-[406px] ml-36 mt-[150px]" style={{fontFamily:'Rubik'}}>
        <p style={{fontFamily:'Rubik', background: 'rgba(4, 28, 55, 0.5)'}} className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[250px]'>Logistics & Supply Chain Solutions</p>
        <h1 className="text-6xl font-bold" style={{fontFamily:'Rubik', lineHeight: '71px'}}>Your Gateway <br /> to any Destination in the World</h1>
        <p style={{fontFamily:'Rubik'}} className='font-medium'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
        <a href="#" className="h=[60px] w-[196px] px-12 py-5 text-[#23212A]" style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>Explore More</a>
    </div>
  )
}

export default Hero