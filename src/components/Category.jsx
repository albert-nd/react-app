import React from 'react'
import { categories } from '../data/data';

const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-800 font-bold text-4xl text-center mt-4'>Top rated menu items</h1>
        {/* categories */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
            {
                categories.map((items, index) => (
                    <div key={index} className='bg-gray-100 p-4 flex justify-between item-center rounded-lg hover:scale-105 duration-300'>
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={items.image} alt={items.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <h2 className='font-bold sm:text-xl'>{items.name}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category;