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
      <h1 className='text-orange-800 font-bold text-4xl text-center mt-4'>
        Top Rated Menu Items
      </h1>
      {/* filter roll */}
      <div className='max-w-[1640px] mx-auto flex justify-between p-4'>
        {/* filter type */}
        <div>
            <p className='text-gray-700 font-bold'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>all</button>
                <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>burger</button>
                <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>pizza</button>
                <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>chicken</button>
                <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>salad</button>
            </div>
        </div>

        {/* filter price */}

        <div>
            <p className='text-gray-700 font-bold'>Filter price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
            </div>
        </div>
      </div>
        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {
                foods.map((item, index) => (
                    <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-500 text-white rounded-full px-2 py-1'>${item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Foods
