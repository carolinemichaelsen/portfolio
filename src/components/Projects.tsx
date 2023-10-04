import React from "react"
import Image from "next/image"
import { BiLogoReact, BiLogoTypescript, BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi';
import { BsFiletypeCss } from 'react-icons/bs'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { SiNextdotjs } from 'react-icons/si'

import '../app/globals.css'

export default function Projects() { return(
  <div className="pt-10 sm:pt-18 lg:pt-24 justify-center ">
      <h3 className='text-zinc-900 font-bold text-4xl text-center mb-8 font-spacegrotesk'>Projetos</h3>
      <div className='grid grid-cols-2 p-20 gap-10'>

        {/* PROJETO 1 */}
        <div className="grid grid-cols-2 bg-zinc-400 opacity-90 rounded-lg outline hover:outline-zinc-300 justify-center">
          <div className="p-8">
            <div className="flex items-center">
              <Image
                src="/imgs/spotify.png"
                width={300}
                height={200}
                alt=""
                className="m-2 hover:opacity-80 cursor-pointer rounded-md"
              />
            </div>
            <p className="text-zinc-900 font-bold text-xl font-spacegrotesk m-2">Spotify Clone</p>
          </div>
            <div className="p-4">
              <div className="flex flex-col">
                <p className="text-xs text-justify max-w-xs mt-8 mb-4 font-poppins">Construído com <b>React</b>, <b>TypeScript</b> e <b>Tailwind</b>.
                </p>
                <div className="flex items-center mb-10 gap-2">
                  <BiLogoReact className="text-2xl text-zinc-900" />
                  <BiLogoTypescript className="text-2xl text-zinc-900" />
                  <BiLogoTailwindCss className="text-2xl text-zinc-900" />
                </div>
                <a href="https://github.com/carolinemichaelsen/spotify-clone" target="_blank">
                  <button className="flex flex-row items-center bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-poppins font-semibold hover:text-purple-700 py-2 px-4 border-purple-500 hover:border-transparent rounded-full text-xs">
                    <AiFillGithub className="mr-2" />
                    Detalhes
                  </button>
                </a>
              </div>
            </div>
        </div>

        {/* PROJETO 2 */}
        <div className="grid grid-cols-2 bg-zinc-400 opacity-90 rounded-lg outline hover:outline-zinc-300 justify-center">
          <div className="p-8">
            <div className="flex items-center">
              <Image
                src="/imgs/preview-mobile.png"
                width={300}
                height={200}
                alt=""
                className="m-2 hover:opacity-80 cursor-pointer rounded-md"
              />
            </div>
            <p className="text-zinc-900 font-bold text-xl font-spacegrotesk m-2">Menu Dropdown</p>
          </div>
            <div className="p-4">
              <div className="flex flex-col">
                <p className="text-xs text-justify max-w-xs mt-8 mb-4 font-poppins">Projeto responsivo em <b>React</b>, <b>TypeScript</b> e <b>Tailwind</b>.
                </p>
                <div className="flex items-center mb-10 gap-2">
                  <BiLogoReact className="text-2xl text-zinc-900" />
                  <BiLogoTypescript className="text-2xl text-zinc-900" />
                  <BiLogoTailwindCss className="text-2xl text-zinc-900" />
                </div>
                <a href="https://github.com/carolinemichaelsen/intro-section-dropdown" target="_blank">
                  <button className="flex flex-row items-center bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-poppins font-semibold hover:text-purple-700 py-2 px-4 border-purple-500 hover:border-transparent rounded-full text-xs">
                    <AiFillGithub className="mr-2" />
                    Detalhes
                  </button>
                </a>
              </div>
            </div>
        </div>

        {/* PROJETO 3 */}
        <div className="grid grid-cols-2 bg-zinc-400 opacity-90 rounded-lg outline hover:outline-zinc-300 justify-center">
          <div className="p-8">
            <div className="flex items-center">
              <Image
                src="/imgs/time-tracking.png"
                width={300}
                height={200}
                alt=""
                className="m-2 hover:opacity-80 cursor-pointer rounded-md"
              />
            </div>
            <p className="text-zinc-900 font-bold text-xl font-spacegrotesk m-2">Time Tracking</p>
          </div>
            <div className="p-4">
              <div className="flex flex-col">
                <p className="text-xs text-justify max-w-xs mt-8 mb-4 font-poppins">Solução em <b>HTML</b> & <b>CSS</b> para o desafio do Frontend Mentor.</p>
                <div className="flex items-center mb-10 gap-2">
                  <AiFillHtml5 className="text-2xl text-zinc-900" />
                  <BsFiletypeCss className="text-2xl text-zinc-900" />
                </div>
                <a href="https://github.com/carolinemichaelsen/time-tracking" target="_blank">
                  <button className="flex flex-row items-center bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-poppins font-semibold hover:text-purple-700 py-2 px-4 border-purple-500 hover:border-transparent rounded-full text-xs">
                    <AiFillGithub className="mr-2" />
                    Detalhes
                  </button>
                </a>
              </div>
            </div>
        </div>

        {/* {/* PROJETO 4 */}
        <div className="grid grid-cols-2 bg-zinc-400 opacity-90 rounded-lg outline hover:outline-zinc-300 justify-center">
          <div className="p-8">
            <div className="flex items-center">
              <Image
                src="/imgs/portfolio.png"
                width={300}
                height={200}
                alt=""
                className="m-2 hover:opacity-80 cursor-pointer rounded-md"
              />
            </div>
            <p className="text-zinc-900 font-bold text-xl font-spacegrotesk m-2">Esse site :D</p>
          </div>
            <div className="p-4">
              <div className="flex flex-col">
                <p className="text-xs text-justify max-w-xs mt-8 mb-4 font-poppins">Meu próprio portfólio foi desenvolvido em <b>React</b>, <b>Next</b>, <b>TypeScript</b> e <b>Tailwind</b>.
                </p>
                <div className="flex items-center mb-10 gap-2">
                  <BiLogoReact className="text-2xl text-zinc-900" />
                  <SiNextdotjs className="text-2xl text-zinc-900" />
                  <BiLogoTypescript className="text-2xl text-zinc-900" />
                  <BiLogoTailwindCss className="text-2xl text-zinc-900" />
                </div>
                <a href="https://github.com/carolinemichaelsen/portfolio" target="_blank">
                  <button className="flex flex-row items-center bg-zinc-300 hover:bg-purple-200 text-zinc-700 font-poppins font-semibold hover:text-purple-700 py-2 px-4 border-purple-500 hover:border-transparent rounded-full text-xs">
                    <AiFillGithub className="mr-2" />
                    Detalhes
                  </button>
                </a>
              </div>
            </div>
        </div>
      </div>
  </div>
) }
 