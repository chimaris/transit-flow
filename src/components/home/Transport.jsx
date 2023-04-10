import Button from "../ui/Button"

const TransportCard = ({names, bg, textSize}) => {
    return (
        <div className={`bg-contain bg-no-repeat h-[380px] w-[230px] pl-4 pt-56 ${bg}`}>
            <h3 className={textSize ? `${textSize}`: 'text-xl' }>{names[0]}</h3>
            <p className='text-[#FFB629] text-[16px]'>{names[1]}</p>
        </div>
    )
}

const Transport = () => {
  return (
    <div className='relative w-full'>
        <div className="w-full h-[400px]" style={{background: "linear-gradient(95deg, #FFB629 -1.19%, #FFDA56 57.78%, #FFD7A6 115.08%)"}}></div>
        <div className='flex flex-col items-center mx-auto absolute left-32 -top-96 py-[85px] w-[80%]'>
            <h2 className='text-[#1C1F35] text-[35px] font-semibold py-6' style={{fontFamily: 'Rubik'}}>Transporting Across The World</h2>
            <div className='flex text-white gap-2'>
                <TransportCard names={['Liquid Transportation', 'Premium Tankers']} bg="bg-[url('/transport1.svg')]" />
                <TransportCard names={['Packaging Solutions', 'Warehouse Management']} bg="bg-[url('/transport2.svg')]"/>
                <TransportCard names={['Contract Logistics', 'Road Transportation']} bg="bg-[url('/transport3.svg')]"/>
                <TransportCard names={['Warehouse & Distribution', 'Large Warehouse']} bg="bg-[url('/transport4.svg')]" textSize='lg'/>
                <TransportCard names={['Specialized Transport', 'Ocean Transports']} bg="bg-[url('/transport5.svg')]"/>
            </div>
            <Button content={'More Work'} style={{backgroundColor: "#091242", color:'white', width:'200px'}}/>
        </div>
    </div>
  )
}

export default Transport