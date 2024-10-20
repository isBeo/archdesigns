'use client'
import DarkThemeToggle from './DarkThemeToggle'
import Search from './Search'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <nav className='
        flex flex-col bg-slate-800
        text-yellow-300  items-center
        p-4 sm:p-10 
        w-full
         hover:text-slate-200
         sm:rounded-s-2xl
        
        text-lg sm:text-xl
    '>
        <div className="close  flex justify-between
                 w-full ">
            <div className="toggle">
                <DarkThemeToggle  />
            </div>
            <button 

            className='btn'
            // btn
            // border-1 p-1
            // bg-slate-900
            // rounded-full'
            >&#10060;</button>
        </div>
        
        
        <div className="links
            flex flex-col items-start
            w-full
        ">
            
            <Link href='/home' >Home</Link>
            <Link href='/postListing'>Designs</Link>
            <Link href='/author'>Contact</Link>
            <Link href='/enter'>Log In</Link>

        </div>


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