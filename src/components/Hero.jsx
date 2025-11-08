import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] min-w-[10px] mx-auto'>
      <div className='max-h-[900px]  relative'>
        {/* overlay */}


        <div className='absolute w-full h-full bg-black/40 text-gray-200 max-h-[900px] flex flex-col justify-center'>
            <h1 className='text-6xl sm:text-lg md:text-4xl lg:text-7xl font-bold text-blue-900 ml-2'>FASHION <span className='text-blue-100'>FOR ALL</span></h1>
            <h1 className='text-5xl sm:text-2xl md:text-4xl lg:text-8xl font-bold text-blue-900 ml-2'><span className='text-blue-900'>EVER<span className='text-blue-100'>YDAY ATTITU</span></span>DE</h1>
        </div>
        <img className='w-full max-h-[900px] object-cover' src="https://i.pinimg.com/1200x/4e/c8/cb/4ec8cb076d85518f0495dca647152a11.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero;
