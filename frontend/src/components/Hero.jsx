import React from 'react'
import mim_logo from '../assets/MiM 1.svg'
function Hero() {
  return (
    <div className='text-white' id="home">
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            {/* MiM logo */}
            <img src={mim_logo} alt='mim-logo' className='w-[20rem] mx-auto' />
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Peer-to-Peer Communication</p>
                
            </div>
            <p className='md:text-2xl text-xl text-bold text-gray-500 pt-5'>A command line GUI torrent application that can download files from the internet through .torrent files.
            </p>
            <a href='#downloadTorrent'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-4 text-black'>Get Started</button></a>
        </div>
      
    </div>
  )
}

export default Hero
