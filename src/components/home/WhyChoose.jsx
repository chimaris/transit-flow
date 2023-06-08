import crossIcon from '../../assets/cross-icon.svg'
import { WhyUs } from '../../data/constant'

const WhyChoose = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full lg:relative'>
        <div className='bg-[#091242] w-1/2 hidden lg:block'>
            
        </div>
        <div className='flex flex-col gap-4 lg:w-1/2 bg-[#F4F4F4] px-4 lg:px-0 py-4 lg:py-[100px] lg:pl-20 lg:pr-8 xl:pl-28 xl:pr-12'>
                <h3 className='text-sm px-[9px] py-[3px] border-l-4 border-[#FFB629] w-[120px] font-["Rubik"]' style={{background: 'rgba(232, 232, 232, 0.5)'}}>Why Choose</h3>
                <h2 className='text-[#1C1F35] text-[32px] font-semibold lg:w-[400px] font-["Rubik"]'>We create opportunity to reach potential</h2>
                <p className='text-[#666C89] lg:w-[360px] xl:w-[450px]'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
                <div className='grid gap-2 lg:gap-4 grid-cols-2 grid-rows-3 text-[#1C1F35]'>
                    {WhyUs.map(feature => (
                        <div className='flex items-center gap-3'>
                            <div>
                                <img src={feature.icon} alt={feature.name} />
                            </div>
                            <div>
                                <p>{feature.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
        <div className="hidden lg:block absolute bg-[url('/airplane1.svg')] lg:w-[472px] lg:h-[310px] xl:w-[655px] xl:h-[430px] bg-no-repeat bg-contain lg:left-20 xl:left-16 top-32 lg:pt-[200px] lg:pl-24 xl:pt-[324px] xl:pl-48">
                <div className='flex items-center bg-white w-[280px] gap-4 p-3' style={{background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)"}}>
                    <img src={crossIcon} alt="Cross border icon" />
                    <p>Moving your products across borders</p>
                </div>
        </div>
    </div>
  )
}

export default WhyChoose