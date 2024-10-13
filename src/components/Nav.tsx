import React from 'react'
import DesktopNav from './DesktopNav'
import Search from './Search'
import DarkThemeToggle from './DarkThemeToggle'
import MobileNav from './MobileNav'

const Nav = () => {
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

                {/* toggle */}
                <button className='
                        justify-self-end md:hidden
                '>
                    ♏
                </button>
                <div className="
                    toggle hidden md:flex
            ">
                    <DarkThemeToggle />
                </div>

            </div>

            {/* mobile menu */}
            <div className="

                    mobileMenu sm:w-[77%]  md:hidden
                    // sm:self-end
            ">
                <MobileNav />
            </div>
        </nav>
    )
}

export default Nav