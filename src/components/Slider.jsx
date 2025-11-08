import React from 'react'
import { useState, useEffect } from "react";

const Slider = () => {

    const images = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    ];
    
    const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer); 
    }, []);   

  return (
    <div className='max-w-[1640px] min-w-[10px] mx-auto flex justify-between items-center'>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="w-full flex-shrink-0 object-cover h-64 sm:h-80 md:h-96"
          />
        ))}
      </div>

    {/* //   Navigation Buttons */}
      {/* <button
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ❯
      </button> */}

      {/* Dots */}
      {/* <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === idx ? "bg-white scale-110" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  )
}

export default Slider
