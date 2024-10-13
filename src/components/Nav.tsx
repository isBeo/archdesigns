import React from 'react'
import DesktopNav from './DesktopNav'
import Search from './Search'
import DarkThemeToggle from './DarkThemeToggle'
import MobileNav from './MobileNav'

const Nav = () => {
    return (
        <nav>
            <div className="
                    wrapper 
                    className='flex justify-between'
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

                {/* toggle */}

                <div className="
                    toggle hidden md:flex
            ">
                    <DarkThemeToggle />
            </div>
                <button className='
                        justify-self-end md:hidden
                '>
                        ♏
                </button>
            </div>

            {/* mobile menu */}
            <div className="
                    mobileMenu md:hidden
            ">
                <MobileNav />
            </div>
        </nav>
    )
}

export default Nav