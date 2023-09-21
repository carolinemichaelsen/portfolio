import React from "react"
import Image from "next/image"
import { BiLogoReact, BiLogoJavascript, BiLogoFigma } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai'
import { Space_Grotesk } from 'next/font/google'

export const spaceGro = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export default function Projects() { return(
<div className="m-12 pt-10 sm:pt-18 lg:pt-24">
  <div>
    <h3 className='text-zinc-900 font-bold text-4xl text-center mb-8 spaceGro'>Projetos</h3>
  </div>
  <div className='flex flex-row columns-3 p-20 items-stretch gap-8'>
    {/* PROJETO 1 */}
    <div className="p-5 bg-zinc-400 opacity-90 rounded-lg outline hover:outline-zinc-300">
      <p className="text-zinc-900 font-bold text-s p-2">Clone do Spotify Web</p>
      <Image src='/imgs/spotify.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center m-2'/>
      <div className='flex flex-col p-4'>
        <p className='text-xs text-justify max-w-xs mb-2'>Reprodução da interface do Spotify Web, construída com React, TypeScript e Tailwind.</p>
        <div className='flex flex-row p-2 gap-2'>
          <BiLogoReact />
          <BiLogoJavascript />
          < BiLogoFigma />
        </div>
      </div>

    </div>

    {/* PROJETO 2 */}
    <div className="p-5 bg-zinc-400 opacity-90 rounded-lg">
      <p className=" space text-zinc-900 font-bold text-s">Site responsivo</p>
      <Image src='/imgs/preview-mobile.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center m-2'/>
      <p className='text-xs text-clip max-w-xs mb-2'>Plataforma pra encontrar trabalho remoto. Usei <b>React</b> e <b>Tailwind</b> criar uma página responsiva e com um menu com navegação dropdown.</p>
      <button className="flex flex-row gap-2 bg-zinc-300 hover:bg-purple-400 text-zinc-700 font-semibold hover:text-white py-2 px-6 border border-purple-500 hover:border-transparent rounded text-xs mb-10"><AiFillGithub />Detalhes</button>
    </div>

    {/* PROJETO 3 */}
    <div className="p-5 bg-zinc-400 opacity-90 rounded-lg">
      <p className="text-zinc-900 font-bold text-s p-2">Clone do Spotify Web</p>
      <Image src='/imgs/spotify.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center m-2'/>
      <p className='text-xs text-justify max-w-xs mb-2'>Clone da interface do Spotify Web, construído com Tailwind.</p>
    </div>
  </div>
</div>
) }
