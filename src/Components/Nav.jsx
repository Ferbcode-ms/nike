import { headerLogo } from '../assets/images'
import { hamburger, cross } from '../assets/icons'
import { navLinks } from '../constants'
import React, { useState } from 'react';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);
  return (


    <header className='padding-x py-8  max-sm:fixed max-sm:bg-white absolute z-20 w-full'>
      <nav className='flex justify-center items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} /></a>


        <ul className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black'
              >{item.label}</a>
            </li>
          ))}


        </ul>
        <div className=' hidden max-lg:block ml-auto cursor-pointer'>
          <img src={click ? cross : hamburger} alt="hamburger" height={25}
            width={25} onClick={handleClick} />

        </div>

        <ul className={` z-30 absolute top-16 p-6 m-7 bg-gray-300 w-[90%] h-[20rem] rounded-2xl flex flex-col justify-center items-center transition-all duration-500 origin-top-right  drop-shadow-md font-semibold   ${click ? "scale-100 opacity-100 " : ' scale-75 opacity-0'}  lg:hidden`}>
          {navLinks.map((item) => (
            <li key={item.label} className='group transition m-2 hover:bg-gray-100 px-6 rounded-lg py-2'>
              <a href={item.href} onClick={closeMobileMenu}
                className='font-montserrat leading-normal text-lg text-bold group-hover:text-coral-red  text-slate-gray '
              >{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav