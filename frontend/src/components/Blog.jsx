import React from 'react';
import Networking from '../assets/network.png';
import Rust from '../assets/rust-mascot.png';
import OS from '../assets/OS.png';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img src={Networking} alt="" className="w-20 mx-auto mt-[-3rem] bg-white"/>
            <h2 className='text-2xl font-bold text-center py-8'>Networking Basics</h2>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Coursera</p> 
            <p className='py-2 border-b mx-8'>Youtube</p> 
            <p className='py-2 border-b mx-8'>Tanenbaum, Wetheral</p> 
            </div>
            <Link to="/computer-networking" className='bg-[#00df9a] w-[200px] text-center rounded-md font-medium my-6 mx-auto py-4 text-black'>Read Blog</Link>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img src={Rust} alt="" className="w-20 mx-auto mt-[-3rem] bg-transparent "/>
            <h2 className='text-2xl font-bold text-center py-8'>Rust Programming Language</h2>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Lets get Rusty</p> 
            <p className='py-2 border-b mx-8'>Rust-lang Book</p> 
            <p className='py-2 border-b mx-8'>Rustlings</p> 
            </div>
            <Link to="/rust" className='bg-black w-[200px] rounded-md button text-center font-medium my-6 mx-auto py-4 text-[#00df9a]'>Read Blog</Link>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img src={OS} alt="" className="w-20 mx-auto mt-[-3rem] bg-white"/>
            <h2 className='text-2xl font-bold text-center py-8'>Operating Systems</h2>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Code Help</p> 
            <p className='py-2 border-b mx-8'>Multithreading</p> 
            <p className='py-2 border-b mx-8'>Love Babbar</p> 
            </div>
            <Link to="/os" className='bg-[#00df9a] w-[200px] rounded-md font-medium text-center my-6 mx-auto py-4 text-black'>Read Blog</Link>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img src={Rust} alt="" className="w-20 mx-auto mt-[-3rem] bg-transparent "/>
            <h2 className='text-2xl font-bold text-center py-8'>Distributed Hash Tables</h2>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Lets get Rusty</p> 
            <p className='py-2 border-b mx-8'>Rust-lang Book</p> 
            <p className='py-2 border-b mx-8'>Rustlings</p> 
            </div>
            <Link to="/dht" className='bg-black w-[200px] rounded-md button text-center font-medium my-6 mx-auto py-4 text-[#00df9a]'>Read Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
