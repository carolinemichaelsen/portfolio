import React from "react"

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Footer(){
    return (
        <>
            <div className='flex flex-row mt-10 justify-center gap-4'>
                
                <a href="https://github.com/carolinemichaelsen/" target="_blank">
                  <button className="flex flex-row items-center bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-poppins font-semibold hover:text-purple-700 py-2 px-4 border-purple-500 hover:border-transparent rounded-full text-xs">
                    <AiFillLinkedin className="mr-2" />
                    LinkedIn
                  </button>
                </a>
                <a href="https://github.com/carolinemichaelsen/" target="_blank">
                  <button className="flex flex-row items-center bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-poppins font-semibold hover:text-purple-700 py-2 px-4 border-purple-500 hover:border-transparent rounded-full text-xs">
                    <AiFillGithub className="mr-2" />
                    Detalhes
                  </button>
                </a>
            </div>
            <div className="flex text-xs font-medium justify-center mt-4 p-10">
                <p>Desenvolvido por Caroline Michaelsen — 2023</p>
            </div>
        </>

    )
}