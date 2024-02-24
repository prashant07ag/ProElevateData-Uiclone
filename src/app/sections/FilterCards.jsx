"use client"
import React, { useRef, useEffect, useState } from 'react';
import { filter } from '../constants/page';
import PopularFilterCards from '../components/PopularFilterCards';

const FilterCards = () => {
  const filterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && filterRef.current) {
        const topPos = filterRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(topPos < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div
      ref={filterRef}
      className={`w-full sm:flex flex-wrap xl:flex-nowrap gap-6 justify-center items-center ${isVisible ? 'animate-grow' : ''}`}
    >
      {filter.map((product) => (
        <PopularFilterCards key={product.name} {...product} />
      ))}
    </div>
  );
};

export default FilterCards;
