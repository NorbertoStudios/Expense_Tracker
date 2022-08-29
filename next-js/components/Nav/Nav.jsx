import React, { useState } from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi';
import NavBtn from './NavBtn';
import { navItems, navItemSetting, logoHome } from '../../constant/nav-items';
import Image from 'next/image';


function Nav() {

  const [isOpen, setIsOpen] = useState(true)


  return (
    <>
      <div className={`relative flex flex-col items-center h-screen caret-transparent text-gray-400 bg-gray-900 duration-300 ${isOpen ? "w-60" : "w-16"}`}>
        <a className="flex items-center w-full px-3 mt-3" href="#">
          <Image className='rounded-full' src={"/NS_fox_outline.svg"} height={40} width={40} />
          {isOpen ? <span className="ml-2 text-sm font-bold">Norberto Studios</span> : ""}
        </a>

        < BiLeftArrowAlt size={30} 
          className={`bg-white text-gray-900 rounded absolute -right-4 top-12 cursor-pointer
        ${!isOpen && "rotate-180"}`
        }
        onClick={() => setIsOpen(!isOpen)}
        />

        <div className="w-full px-2 mb-auto">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700 ">

            {navItems.map((item) => (
              <NavBtn
                key={item.name}
                name={item.name}
                icon={item.icon}
                hRef={item.hRef}
                isOpen={isOpen}
              />
            ))}

          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
          <NavBtn
            name={navItemSetting.name}
            icon={navItemSetting.icon}
            hRef={navItemSetting.hRef}
            isOpen={isOpen}
          />
        </div>

        <div className="flex items-center justify-center w-full h-16 mt-2 bg-gray-800" >

          <div className="flex justify-center items-center space-x-2 cursor-pointer  hover:text-gray-300">
            <Image className="rounded-full" src={"/NS_fox.svg"} height={40} width={40} alt="user logo" />
            {isOpen ? <div className="flex justify-start flex-col items-start">
              <p className="text-sm leading-5 ">Norberto Studios</p>
              <p className="text-xs leading-3 ">norbertostudios@gmail.com</p>
            </div> : ""
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
