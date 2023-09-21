import React from "react"

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Footer(){
    return (
        <>
            <div className='flex flex-row mt-10 justify-center gap-4'>
                <button className='flex flex-row gap-2 bg-transparent hover:bg-purple-400 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded text-xs mb-10'><AiFillLinkedin />LinkedIn</button>
                <button className="flex flex-row gap-2 bg-transparent hover:bg-purple-400 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded text-xs mb-10"><AiFillGithub />GitHub</button>
            </div>
            <div className="flex text-xs justify-center p-10">
                <p>Desenvolvido por Caroline Michaelsen — 2023</p>
            </div>
        </>

    )
}