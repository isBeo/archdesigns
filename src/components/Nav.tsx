'use client'
import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import Search from './Search'
import DarkThemeToggle from './DarkThemeToggle'
import MobileNav from './MobileNav'

const Nav = () => {

const [menu,setMenu]=useState(false)

const showMenu = (e) =>{
    console.log(e.target)
    setMenu(menu=>!menu)
}
console.log(menu)

    return (
        <nav className='flex  flex-col'>
            
            <div className="
                    wrapper  text-lg md:text-xl
                    flex justify-between
                    p-2 sm:p-4 md:p-8 lg:p-10
            ">
                {/* brand name*/}

                <span className="
                    brandName font-extrabold

                ">
                    HenGee Designs
                </span>

                <div className="search hidden sm:flex">
                    <Search />
                </div>

                <div className="dNav hidden md:flex">
                    <DesktopNav />
                </div>

                {/* menu button */}
                <button  type='button'
                   onClick={(e)=>showMenu(e)}
                   className='
                        justify-self-end md:hidden font-extrabold p-1 rounded-md border-2
                '>
                    MENU
                </button>

               
               
                    
                     <div className="
                        toggle hidden md:flex
                    ">
                        <DarkThemeToggle />
                    </div>
            

            </div>


            {/* mobile menu */}
           {
            menu? '': 
            <div className="
            mobileMenu w-full  sm:w-[80%]  self-end md:hidden
               bg-pink-200
     ">
         <MobileNav />
     </div>
           }
        </nav>
    )
}

export default Nav