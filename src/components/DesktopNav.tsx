'use client'
import Link from 'next/link'
import React from 'react'

const DesktopNav = () => {
  return (
    <nav>
        <Link href='/homepage'>Home</Link>
        <Link href='/postListing'>Designs</Link>
        <Link href='/author'>Contact</Link>
        <Link href='/enter'>Log In</Link>
    </nav>
  )
}

export default DesktopNav