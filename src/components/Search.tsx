import React from 'react'

const Search = () => {
  return (
    <form action=""
    className='border-1 border-blue-300 drop-shadow-lg shadow-inner  w-full flex rounded-md bg-slate-400'
>
    <input type="search" 
        className='w-full focus:outline-none 
                    p-1 sm:p-2
                '
        placeholder='search for a house plan'
    />
    <input type="submit" value="🔍"  className='bg-slate-400 px-2 rounded-md ' />
</form>
  )
}

export default Search