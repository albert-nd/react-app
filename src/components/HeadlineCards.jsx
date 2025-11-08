import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* CARDS */}

      <div className='relative h-[350px] '>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Co-operate and working outfits</p>
            <p className='px-2'>Office and interviews</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold hover:text-blue-900 hover:duration-300'>Order Now</button>
        </div>
        
        <img className='h-full w-full object-cover rounded-xl' src="https://i.pinimg.com/736x/02/a7/56/02a756c8150dcba5e7a60f30bac7a5a0.jpg" alt="/" />
        </div>


      <div className='relative h-[350px] '>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Street and trending outfits</p>
            <p className='px-2'>Everyday outfit</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold hover:text-blue-900 hover:duration-300'>Order Now</button>
        </div>
        
        <img className='h-full w-full object-cover rounded-xl' src="https://i.pinimg.com/736x/5c/ca/09/5cca09f5c8c5a8c4ecb4ecee185c749f.jpg" alt="/" />
        </div>


      <div className='relative h-[350px] '>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sports and fitness outfits</p>
            <p className='px-2'>sport wears</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold hover:text-blue-900 hover:duration-300'>Order Now</button>
        </div>

        <img className='h-full w-full object-cover rounded-xl' src="https://i.pinimg.com/1200x/ba/af/c2/baafc2d1e108c3181d551f38210fe02e.jpg" alt="/" />
        </div>
      </div>
  )
}

export default HeadlineCards;
