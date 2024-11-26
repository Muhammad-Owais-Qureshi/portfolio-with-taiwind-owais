"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import SliderNav from './sliderNav';
import Link from 'next/link';

const Header = () => {
    const [nav,setnav] = useState<boolean>(false)
  return (
    <div>
            <div>
        <nav className="">
            <ul className="w-full flex justify-between bg-orange-400 px-7 font-medium text-white h-11 items-center">


                <li className="font-medium text-white text-2xl">Owais Qureshi</li>
                <Link className="hidden sm:block hover:text-black font-bold" href={"/"}><li>Home</li></Link>
                <Link className="hidden sm:block hover:text-black font-bold" href={"/about"}><li>About</li></Link>
                <Link className="hidden sm:block hover:text-black font-bold" href={"/contact"}><li>Contact</li></Link>
              
                <li onClick={() => setnav(!nav) } className="sm:hidden"> {nav ? <RxCross2/> : <GiHamburgerMenu/>}</li>
                 
                  
            </ul>
            
        </nav>
        {nav && <SliderNav />}
    </div>
    </div>
  )
}

export default Header