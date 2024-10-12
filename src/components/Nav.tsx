import React from 'react'
import DesktopNav from './DesktopNav'
import Search from './Search'
import DarkThemeToggle from './DarkThemeToggle'
import MobileNav from './MobileNav'

const Nav = () => {
    return (
        <nav>
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
            <div className="
                toggle hidden md:flex
            ">
                <DarkThemeToggle />
            </div>
            <div className="
                    mobileMenu md:hidden
            ">
                <MobileNav />
            </div>
        </nav>
    )
}

export default Nav