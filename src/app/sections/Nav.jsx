import React from 'react';
import { navLinks } from '../constants/page';
import { hamburger } from '../assets/page';
const Nav = () => {
    return (
        <header className='px-5 py-8 z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src="https://www.proelevate.in/assets/Common/Logo.svg" alt="logo" width={220} height={50} />
                </a>
                <ul className='flex px-2 justify-center items-center gap-6 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='leading-normal text-center text-lg text-gray-500 hover:text-orange-500 font-medium'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='max-lg:hidden'>
                    <div className="w-full items-start gap-2 hidden lg:flex">
                        <button className="text-center text-[18px] px-6 py-3 rounded-[28px] transition-all duration-500 ease-in-out
    bg-orange-500 text-white hover:bg-orange-600
    min-w-fit">
                            <p className="w-full flex gap items-center justify-center gap-3">Log in</p>
                        </button>
                        <button className="text-center text-[18px] px-6 py-3 rounded-[28px] transition-all duration-500 ease-in-out
    bg-gray-50 text-black border border-gray-300 hover:bg-gray-200
    min-w-fit">
                            <p className="w-full flex gap items-center justify-center gap-3">Join Free</p>
                        </button>
                    </div>

                </div>
                <div className="hidden max-lg:block hover:shadow-3xl">
                    <div className=' w-[35px] h-[5px] bg-black my-[6px]'></div>
                    <div className=' w-[35px] h-[5px] bg-black my-[6px]'></div>
                    <div className=' w-[35px] h-[5px] bg-black my-[6px]'></div>
                </div>
            </nav>
        </header>
    )
}

export default Nav