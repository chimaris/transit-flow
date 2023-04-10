import React from 'react'
import star from '../../assets/star.svg'

const Star = () => {
  return (
    <div className='flex items-center gap-1'>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
    </div>
  )
}

export default Star