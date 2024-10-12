'use client'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <h1
        className='
            m-4
        '
    >
        ...oops! wrong address. Return to the
         <Link href='/' className='
            mx-2 p-2
            text-blue-600 bg-red-200
            font-bold text-shadow-white
            rounded-md shadow-inner
            hover:bg-red-300 hover:text-blue-400
          '>
            Home Page
         </Link>
    </h1>
  )
}

export default NotFound