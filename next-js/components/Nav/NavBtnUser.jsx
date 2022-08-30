import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBtnUser = ({ isOpen, w, h, name, imgUrl }) => {
    return (
        <Link href='#'>
            <div className="flex justify-center items-center space-x-2 cursor-pointer  hover:text-gray-300">
                <Image className="rounded-full" src={imgUrl} height={h} width={w} alt="user logo" />
                {isOpen ? <div className="flex justify-start flex-col items-start">
                    <p className="text-sm leading-5">{name}</p>
                    <p className="text-xs leading-3">View Profile</p>
                </div> : ""
                }
            </div>
        </Link>
    )
}

export default NavBtnUser