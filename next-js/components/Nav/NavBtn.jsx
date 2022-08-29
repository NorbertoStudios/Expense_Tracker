import React from 'react'

const NavBtn = ({ name, icon, hRef, isOpen, selected }) => {

    const openNav = " w-full px-3 "
    const closeNav = "justify-center w-12 overflow-hidden "

    const nameText = isOpen ? name : " "
    return (
        <a className={`flex items-center h-12 mt-2 rounded ${selected ? "bg-gray-700 text-gray-200" : "hover:bg-gray-700 hover:text-gray-300"} ${isOpen ? openNav : closeNav} duration-300`}
            href={hRef}
        >
            {icon}

            <span className="ml-2 text-sm font-medium duration-700">
                {nameText}
            </span>

            {/* <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span> */}
        </a>
    )
}

export default NavBtn