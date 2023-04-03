import React from 'react'
import CLI from '../assets/terminal.png'

function AboutCLI() {
  return (
    <div className="w-full bg-white py-16 px-4 " id="cli">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[300px] mx-auto my-4" src={CLI} alt="/"/>
            <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold">CLI Docs</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">HOW TO USE THE CLI?</h1>
                <p>Get a comprehensive idea of how to use our CLI tool and explore all its functionalities!</p>
                <a href="https://github.com/the-pinbo/mim#how-to-install"><button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-4 text-center text-[#00df9a]'>Get Started</button></a>
                </div>
        </div>
      
    </div>
  )
}

export default AboutCLI
