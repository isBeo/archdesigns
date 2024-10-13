'use client'
import DarkThemeToggle from './DarkThemeToggle'
import Search from './Search'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <nav className='
        flex flex-col bg-slate-800
        text-white  items-center
        p-4 sm:p-10
        
        text-lg sm:text-xl
    '>
        <div className="close self-end flex
                 w-full justify-end">
            <div className="toggle">
                <DarkThemeToggle  />
            </div>
            <button className='
            border-1 p-1'>❌</button>
        </div>
        
        <Link href='/homepage'>Home</Link>
        <Link href='/postListing'>Designs</Link>
        <Link href='/author'>Contact</Link>
        <Link href='/enter'>Log In</Link>

        <div className="
                search w-[70%] sm:hidden
                 text-black mt-4
        ">
            <Search />
        </div>
    </nav>
  )
}

export default MobileNav