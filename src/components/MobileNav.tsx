'use client'
import DarkThemeToggle from './DarkThemeToggle'
import Search from './Search'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <nav className='
        flex flex-col bg-slate-800
        text-white text-sm items-center
    '>
        <div className="close self-end flex
                 w-full justify-between">
            <div className="toggle">
                <DarkThemeToggle  />
            </div>
            <button className='
            border-1 border-red-700 p-1'>❌</button>
        </div>
        
        <Link href='/homepage'>Home</Link>
        <Link href='/postListing'>Designs</Link>
        <Link href='/author'>Contact</Link>
        <Link href='/enter'>Log In</Link>
        <div className="search sm:hidden text-black">
            <Search />
        </div>
    </nav>
  )
}

export default MobileNav