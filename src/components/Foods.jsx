import { data } from '../data/data'
import React, { useState } from 'react'

const Foods = () => {

const [foods, setFoods] = useState(data);

const filterType = (category) => {
    setFoods(
        data.filter(item => item.category === category)
    );
}

// filterprice

const filterPrice = (price) => {
    setFoods(
        data.filter(item => item.price === price)
    );
}


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-blue-900 font-bold text-4xl text-center mt-4'>
        Top Rated Products
      </h1>
      {/* filter roll */}
      <div className='max-w-[1640px] mx-auto flex justify-between p-4'>
        {/* filter type */}
        <div>
            <p className='text-gray-700 font-bold'>Product Filter</p>
            <div className='flex flex-wrap'>
                <button onClick={() => setFoods(data)} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>all</button>
                <button onClick={() => filterType('shirts')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>shirts</button>
                <button onClick={() => filterType('pants')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>pants</button>
                <button onClick={() => filterType('shorts')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>shorts</button>
                <button onClick={() => filterType('sports')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>sports</button>
                <button onClick={() => filterType('foot wear')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>foot wear</button>
                <button onClick={() => filterType('accessories')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>accessories</button>
            </div>
        </div>

        {/* filter price */}

        <div>
            <p className='text-gray-700 font-bold'>Product Filter</p>
            <div className='flex flex-wrap max-w-[390px] w-full'>
                <button onClick={() => filterPrice('$20')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>$20</button>
                <button onClick={() => filterPrice('$100')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>$100</button>
                <button onClick={() => filterPrice('$200')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>$200</button>
                <button onClick={() => filterPrice('$800')} className='m-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'>$800</button>
            </div>
        </div>
      </div>
        {/* display foods */}
        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {
                foods.map((item, index) => (
                    <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-blue-900 text-white rounded-full px-2 py-1'>${item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Foods
