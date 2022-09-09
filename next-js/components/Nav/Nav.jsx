import React, { useState } from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi';
import NavBtn from './NavBtn';
import { navItems, navItemSetting } from '../../constant/nav-items';
import Image from 'next/image';
import Link from 'next/link'
import NavBtnUser from './NavBtnUser';


function Nav() {

  const [isOpen, setIsOpen] = useState(true)


  return (
    <>
      <div className={`relative flex flex-col items-center
      h-screen caret-transparent text-gray-400 bg-gray-900 
      ${isOpen ? "w-64" : "w-16"}`}>
        <Link href='#'>
          <a className="flex items-center w-full px-3 mt-3">
            <Image className='rounded-full' src={"/NS_fox_outline.svg"} height={40} width={40} />
            {isOpen ? <span className="ml-2 text-sm font-bold">Norberto Studios</span> : ""}
          </a>
        </Link>

        < BiLeftArrowAlt size={30}
          className={`bg-gray-700 text-gray-300 rounded absolute 
          -right-4 top-12 cursor-pointer 
          
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

        <div className="flex flex-col px-2 items-center w-full mt-2 border-t border-gray-700">
          <NavBtn
            name={navItemSetting.name}
            icon={navItemSetting.icon}
            hRef={navItemSetting.hRef}
            isOpen={isOpen}
          />
        </div>

        <div className="flex items-center px-4  w-full h-16 mt-2 bg-gray-800" >
          <NavBtnUser
            isOpen={isOpen}
            name="Norberto Studios"
            w={40}
            h={40}
            imgUrl={"/NS_fox.svg"}
          />
        </div>
      </div>
    </>
  )
}

export default Nav
