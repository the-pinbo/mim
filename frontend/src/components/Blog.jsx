import React from 'react';
import Networking from '../assets/network.png';
import Rust from '../assets/rust-mascot.png';
import OS from '../assets/OS.png';
import DHT from "../assets/binary-tree.png"
import { Link} from "react-router-dom";

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id="blogs">
      <h1 className='mx-auto text-center flex flex-col justify-center text-4xl mb-20 text-[#00df9a] font-bold'>BLOGS and RESOURCES</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img src={Networking} alt="" className="w-20 mx-auto mt-[-3rem] bg-white"/>
            <h2 className='text-2xl font-bold text-center py-8'>Networking Basics</h2>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Coursera</p> 
            <p className='py-2 border-b mx-8'>Youtube</p> 
            <p className='py-2 border-b mx-8'>Tanenbaum, Wetheral</p> 
            </div>
            <Link to="/computer-networking" className='my-6 mx-auto py-4 bg-[#00df9a] w-[200px] rounded-md font-medium text-center text-black'>
            Read Blog
            </Link>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img src={Rust} alt="" className="w-20 mx-auto mt-[-3rem] bg-transparent "/>
            <h2 className='text-2xl font-bold text-center py-8'>Rust Programming Language</h2>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Lets get Rusty</p> 
            <p className='py-2 border-b mx-8'>Rust-lang Book</p> 
            <p className='py-2 border-b mx-8'>Rustlings</p> 
            </div>
              <a href="https://www.rust-lang.org/learn" target="_blank" className='my-6 mx-auto py-4 bg-[#00df9a] w-[200px] rounded-md font-medium text-center text-black'>Learn</a>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img src={OS} alt="" className="w-20 mx-auto mt-[-3rem] bg-white"/>
            <h2 className='text-2xl font-bold text-center py-8'>Operating Systems</h2>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Code Help</p> 
            <p className='py-2 border-b mx-8'>Multithreading</p> 
            <p className='py-2 border-b mx-8'>Love Babbar</p> 
            </div>
            <Link to="/os" className='my-6 mx-auto py-4 bg-[#00df9a] w-[200px] rounded-md font-medium text-center text-black'>
            Read Blog
            </Link>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img src={DHT} alt="" className="w-20 mx-auto mt-[-3rem] bg-transparent "/>
            <h2 className='text-2xl font-bold text-center py-8'>Distributed Hash Tables</h2>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Stanford</p> 
            <p className='py-2 border-b mx-8'>Arpit Bhayani</p> 
            <p className='py-2 border-b mx-8'>Kelsey Chan</p> 
            </div>
            <Link to="/dht" className='my-6 mx-auto py-4 bg-[#00df9a] w-[200px] rounded-md font-medium text-center text-black'>
            Read Blog
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
