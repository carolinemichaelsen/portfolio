import React from "react"
import Image from "next/image"
import { BiLogoReact, BiLogoTypescript, BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai'

import '../app/globals.css'

export default function Projects() { return(
<div className="pt-10 sm:pt-18 lg:pt-24 justify-center">
    <h3 className='text-zinc-900 font-bold text-4xl text-center mb-8 font-h3'>Projetos</h3>
  <div className='flex flex-row columns-3  p-20 items-stretch gap-10'>

    {/* PROJETO 1 */}
    <div className="p-8 bg-zinc-400 opacity-90 rounded-lg outline hover:outline-zinc-300 justify-center">
      <p className="text-zinc-900 font-bold text-s font-h3 mb-6">Clone do Spotify Web</p>
      <Image src='/imgs/spotify.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center'/>
      <div className='flex flex-col'>
        <p className='text-xs text-justify max-w-xs mt-6 mb-2'>Reprodução da interface do Spotify Web, construída com <b>React</b>, <b>TypeScript</b> e <b>Tailwind</b>.</p>
        <div className='flex flex-row gap-2 mt-2'>
          <BiLogoReact />
          <BiLogoTypescript />
          <BiLogoTailwindCss />
        </div>
        <a href='https://github.com/carolinemichaelsen/spotify-clone' target='_blank'><button className="flex flex-row gap-2 bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-semibold hover:text-purple300 py-2 px-2 w-24 border border-purple-500 hover:border-transparent rounded text-xs mb-4 mt-8 font-h3"><AiFillGithub />Detalhes</button></a>
        <div>

        </div>
      </div>

    </div>

    {/* PROJETO 2 */}
    <div className="p-8 bg-zinc-400 opacity-90 rounded-lg outline hover:outline-zinc-300 justify-center">
      <p className="text-zinc-900 font-bold text-s font-h3 mb-6">Site Responsivo</p>
      <Image src='/imgs/preview-mobile.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center'/>
      <div className='flex flex-col'>
        <p className='text-xs text-justify max-w-xs mt-6 mb-2'>Página home responsiva e com um menu com navegação dropdown.</p>
        <div className='flex flex-row gap-2 mt-2'>
          <BiLogoReact />
          <BiLogoTypescript />
          <BiLogoTailwindCss />
        </div>
        <a href='https://github.com/carolinemichaelsen/intro-section-dropdown' target='_blank'><button className="flex flex-row gap-2 bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-semibold hover:text-purple300 py-2 px-2 w-24 border border-purple-500 hover:border-transparent rounded text-xs mb-4 mt-8 font-h3"><AiFillGithub />Detalhes</button></a>
        <div>

        </div>
      </div>

    </div>

    {/* PROJETO 3 */}
    <div className="flex flex-col p-14 bg-zinc-400 opacity-90 rounded-lg outline hover:outline-zinc-300">
      <p className="text-zinc-900 font-bold text-s font-h3 mb-6">HTML & CSS</p>
      <Image src='/imgs/time-tracking.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center'/>
      <div className='flex flex-col'>
        <p className='text-xs text-justify max-w-xs mt-6 mb-2'>Solução para o desafio do Frontend Mentor.</p>
        <div className='flex flex-row gap-2 mt-2'>
          <BiLogoReact />
          <BiLogoTypescript />
          <BiLogoTailwindCss />
        </div>
        <a href='https://github.com/carolinemichaelsen/time-tracking' target='_blank'><button className="flex flex-row gap-2 bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-semibold hover:text-purple300 py-2 px-2 w-24 border border-purple-500 hover:border-transparent rounded text-xs mb-4 mt-8 font-h3"><AiFillGithub />Detalhes</button></a>
        <div>

        </div>
      </div>

    </div>
  </div>
</div>
) }
