"use client"
import React from 'react';

const PopularFilterCards = ({ imgURL, name, color }) => {
    const colorMap = {
        'orange-50': '#FDE8D2',
        'blue-50': '#DBEAFE',
        'yellow-50': '#FEF3C7',
        'green-50': '#D1FAE5',
        // Add more colors as needed
      };
    
  const cardStyle = {
    backgroundColor: colorMap[color], // Set background color based on the 'color' prop
  };

  const handleHover = (event) => {
    event.currentTarget.style.border = '1px solid #f59e0b'; // Orange 300 border on hover
  };

  const handleMouseOut = (event) => {
    event.currentTarget.style.border = 'none'; // Remove border on mouse out
  };

  return (
    <div
      className='w-72 h-72 rounded-xl border-[1px] hover:border-orange-500 hover:shadow-orange flex flex-col gap-2 my-3 items-center relative pt-8 overflow-hidden bg-info-50 justify-between'
      style={cardStyle}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <h3 className='px-5 font-semibold text-gray-600'>
        {name}
      </h3>
      <img src={imgURL} alt={name} className='w-[282px] h-auto' />
    </div>
  );
};

export default PopularFilterCards;
