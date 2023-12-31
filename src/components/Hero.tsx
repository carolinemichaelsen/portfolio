import React from "react"
import { BiLogoReact, BiLogoJavascript, BiLogoTypescript, BiLogoTailwindCss, BiLogoFigma } from 'react-icons/bi';
import { AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Hero() {
    return (
        <div className="grid grid-cols-2">
            <div className="relative max-w-5xl mx-auto p-30 sm:p-24 lg:p-32">
                <div className="w-10 h-0 border-2 border-black"></div>
                <div className="text-black text-xs font-manrope">oi, eu sou a carol</div>
                <div className="text-black text-5xl font-h3 mt-4 leading-snug"><RoughNotation type='highlight' color='#1EC970' show={true}>Desenvolvedora </RoughNotation><br/><RoughNotation type="highlight" color='#F3ACCE' show={true}>Front-end</RoughNotation></div>
                <div className='flex flex-row mt-4 gap-4'>
                    <a href="https://www.linkedin.com/in/carolinemichaelsen/" target="_blank"  className="flex flex-row items-center bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-poppins font-semibold hover:text-purple-700 py-4 px-4 border-purple-500 hover:border-transparent rounded-full text-xs" >
                        <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/carolinemichaelsen/" target="_blank"  className="flex flex-row items-center bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-poppins font-semibold hover:text-purple-700 py-4 px-4 border-purple-500 hover:border-transparent rounded-full text-xs" >
                        <AiFillGithub/>
                    </a>
                </div>

            </div>
            <div className="p-30 sm:p-24 lg:p-32 w-200 text-black text-sm font-manrope">Criação de produtos digitais acessíveis e responsivos.<br></br><br></br>
            
            <RoughNotation type='highlight' color='#f6db84' show={true}><b>React</b>, React Native, <b>JavaScript</b>, TypeScript, <b>Tailwind</b>, HTML e CSS. </RoughNotation> 
                <div className='flex flex-row mt-8 gap-2 text-lg'>
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