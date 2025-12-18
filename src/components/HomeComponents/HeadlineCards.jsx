import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-5 grid md:grid-cols-3 gap-6'>
      {/* Card 1 */}
      <div className='relative h-[250px]'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 9/28</p>
          <button className='border-white bg-white text-black font-bold mx-2 absolute bottom-4 hover:bg-black/50 hover:border-orange-500 duration-300 hover:text-white'>Order Now</button>
        </div>
        <img
          className='h-full w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=800&q=60'
          alt='Card 1'
        />
      </div>

      {/* Card 2 */}
      <div className='relative h-[250px]'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurant</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black font-bold mx-2 absolute bottom-4 hover:bg-black/50 hover:border-orange-500 duration-300 hover:text-white'>Order Now</button>
        </div>
        <img
          className='h-full w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60'
          alt='Card 2'
        />
      </div>

      {/* Card 3 */}
      <div className='relative h-[250px]'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We deliver Dessert too</p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white text-black font-bold mx-2 absolute bottom-4 hover:bg-black/50 hover:border-orange-500 duration-300 hover:text-white'>Order Now</button>
        </div>
        <img
          className='h-full w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?auto=format&fit=crop&w=800&q=60'
          alt='Card 3'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;

