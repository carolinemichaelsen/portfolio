import React from "react"
import Image from "next/image"
import { BiLogoReact, BiLogoJavascript, BiLogoTypescript, BiLogoTailwindCss, BiLogoFigma } from 'react-icons/bi';

export default function Hero() {
    return (
        <div className="grid grid-cols-2">
            <div className="relative max-w-5xl mx-auto p-30 sm:p-24 lg:p-32">
                <div className="w-10 h-0 border-2 border-black"></div>
                <div className="text-black text-xs font-normal font-manrope">oi, eu sou a carol</div>
                <div className="text-black leading-20 text-5xl font-normal font-h3 mt-4">Desenvolvedora <br/>Front-end</div>
            </div>
            <div className="p-30 sm:p-24 lg:p-32 w-200 text-black text-s font-normal font-manrope">Migrando da comunicação para o desenvolvimento front-end. Conhecimentos em <b>React</b>, <b>React Native</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>Tailwind</b>, HTML e CSS.
                <div className='flex flex-row mt-8 gap-2'>
                    <BiLogoReact className='hover:text-violet-300'/>
                    <BiLogoJavascript className='hover:text-violet-300'/>
                    <BiLogoTypescript className='hover:text-violet-300'/>
                    <BiLogoTailwindCss  className='hover:text-violet-300'/>
                    <BiLogoFigma  className='hover:text-violet-300'/>
                </div>
            </div>
        </div>
    )
}