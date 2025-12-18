import React from 'react';
import Foods from '../../components/Order/Foods';
import Category from '../../components/Order/Category';

const OrderFood = () => {
  return (
    <div
      className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/f7/9f/b6/f79fb66a1d92ae0b5aa59c18fa8f0cca.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Actual content */}
      <div className="relative z-10 pb-10">
        <Foods />
        <Category />
      </div>
    </div>
  );
};

export default OrderFood;
