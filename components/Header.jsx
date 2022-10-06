import React from 'react'

const Header = () => {
  return (
    <div className='2xl:flex xl:flex lg:flex my-5 justify-around container mx-auto'>
      <h1 className='text-3xl font-bold	 text-red-500'>SHOP</h1>
      <input type="text" className=' 2xl:px-96 lg:px-28 border-1 px-16 py-2 outline-none  ring-2 border-5 ring-slate-500	' />
      <button class=" bg-sky-900	 text-white px-14 py-2.5 xs:-ml-28 sm:-ml-28 2xl:-ml-72 cursor-pointer md:-ml-36 lg:-ml-72	">Search</button>
      
    
           
    </div>
  )
}

export default Header
