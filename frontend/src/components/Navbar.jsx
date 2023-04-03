import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import mim_logo from '../assets/MiM 1.svg'

function Navbar() {
    const [nav, setNav]=useState(true);

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className='flex  flex-1 justify-between items-center h-24 max-w-[80%] mx-auto px-4 text-white '>
      {/* MiM logo */}
      <img src={mim_logo} alt="logo" className='w-20 h-20' />
      <ul className='hidden md:flex'>
        <a href="#home"><li className='p-4'>HOME</li></a>
        <a href="#cli"><li className='p-4'>CLI</li></a>
        <a href="#downloadTorrent"><li className='p-4'>DOWNLOAD_TORRENT</li></a>
        <a href="#blogs"><li className='p-4'>BLOGS</li></a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {
            !nav? <AiOutlineClose size={20} /> :<AiOutlineMenu size={20}/>
        }
        </div>
      <div className={!nav? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-screen bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold m-7 text-[#00df9a]'>MIM</h1>
        <ul className='p-4 border-b border-gray-600'>
        <li className='p-4 border-b border-gray-600'>HOME</li>
        <li className='p-4 border-b border-gray-600'>CLI</li>
        <li className='p-4 border-b border-gray-600'>DOWNLOAD TORRENT</li>
        <li className='p-4'>BLOGS</li>
        <a href="#home"><li className='p-4 border-b border-gray-600'>HOME</li></a>
        <a href="#cli"><li className='p-4 border-b border-gray-600'>CLI</li></a>
        <a href="#downloadTorrent"><li className='p-4 border-b border-gray-600'>DOWNLOAD_TORRENT</li></a>
        <a href="#blogs"><li className='p-4 border-b border-gray-600'>BLOGS</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
