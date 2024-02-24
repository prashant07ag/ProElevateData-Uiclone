"use client"
import React, { useRef, useEffect, useState } from 'react';
import { socialMedia, footerLinks } from '../constants/page';
import { copyrightSign } from "../assets/page";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && footerRef.current) {
        const topPos = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(topPos < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <footer ref={footerRef} className={`max-container px-10 ${isVisible ? 'animate-grow' : ''}`}>
      <div className='flex mt-5 justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src="https://www.proelevate.in/assets/Common/FooterLogo.svg"
              alt='logo'
              width={220}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 text-white-400 sm:max-w-sm'>
            Join Our Community: Connect with like minded individuals and grow your network.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className='mt-4'/>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-center items-center gap-2 cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
