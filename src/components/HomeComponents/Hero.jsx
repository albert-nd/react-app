import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full bg-black/40 text-gray-200 max-h-[900px] flex flex-col justify-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl ml-4 lg:text-6xl font-bold'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='text-4xl sm:text-5xl ml-4 md:text-6xl lg:text-6xl font-bold'>
            <span className='text-orange-500'>Food </span>Delivered
          </h1>
        </div>
        <img
          className='w-full h-[500px] object-cover'
          src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'
          alt='Food'
        />
      </div>
    </div>
  );
};

export default Hero;
