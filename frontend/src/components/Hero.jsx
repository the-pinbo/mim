import React from 'react'

function Hero() {
  return (
    <div className='text-white' id="home">
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-2xl'>A TORRENT CLIENT</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>MIM</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Peer-to-Peer Communication</p>
                
            </div>
            <p className='md:text-2xl text-xl text-bold text-gray-500 pt-5'>A command line GUI torrent application that can download files from the internet through .torrent files and magnet links.
            </p>
            <a href='#downloadTorrent'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-4 text-black'>Get Started</button></a>
        </div>
      
    </div>
  )
}

export default Hero
