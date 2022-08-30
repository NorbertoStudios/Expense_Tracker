import React from 'react'
import Link from 'next/link'

const NavBtn = ({ name, icon, hRef, isOpen, selected }) => {

    const openNav = "w-full  px-3 "
    const closeNav = "justify-center w-12 overflow-hidden "

    const nameText = isOpen ? name : " "

    return (
        <Link href={hRef}>
            <a className={`flex items-center h-12 mt-2 rounded
                ${selected ? "bg-gray-700 text-gray-200" : "hover:bg-gray-700 hover:text-gray-300"} 
                ${isOpen ? openNav : closeNav} 
                `}
            >
                {icon}

                <span className="ml-2 text-sm font-medium">
                    {nameText}
                </span>

                {/* <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span> */}
            </a>
        </Link>
    )
}

export default NavBtn