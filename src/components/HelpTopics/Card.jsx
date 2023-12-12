import React from 'react'

const Card = () => {
  return (
    
    <div className='h-auto min-w-[309px] '>
        <img src="data:image/jpeg;base64,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" alt="burger" className='rounded-3xl w-[309px] h-[370px]'/>
        <h1 className='font-satoshi font-[700] text-lg' >Product Name</h1>
        <p  className='font-satoshi text-sm text-black/70 font-normal'>Lorem, ipsum.</p>
        <p  className='font-satoshi text-sm text-black/70 font-normal'>Lorem ipsum dolor sit.</p>
    </div>
  )
}

export default Card