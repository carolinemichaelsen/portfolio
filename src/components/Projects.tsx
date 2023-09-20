import React from "react"
import Image from "next/image"

export default function Projects() { return(
<div className="pt-20 sm:pt-24 lg:pt-32">
  <div>
    <h3 className='text-zinc-900 font-bold text-4xl text-center'>Projetos</h3>
  </div>
  <div className='flex flex-row columns-3 p-5 items-stretch gap-8'>
    <div className="p-5 bg-zinc-400 opacity-90 rounded-lg">
      <p className="text-zinc-900 font-bold text-s p-2">Clone do Spotify Web</p>
      <Image src='/imgs/spotify.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center m-2'/>
      <p className='text-sm text-justify'>Clone da interface do Spotify Web, construído com Tailwind.</p>
    </div>
    <div className="p-5 bg-zinc-400 opacity-90 rounded-lg">
      <p className="text-zinc-900 font-bold text-s p-2">Clone do Spotify Web</p>
      <Image src='/imgs/spotify.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center m-2'/>
      <p className='text-sm text-justify'>Clone da interface do Spotify Web, construído com Tailwind.</p>
    </div>
    <div className="p-5 bg-zinc-400 opacity-90 rounded-lg">
      <p className="text-zinc-900 font-bold text-s p-2">Clone do Spotify Web</p>
      <Image src='/imgs/spotify.png' width={200} height={100} alt='' className='hover:opacity-80 cursor-pointer rounded-md items-center m-2'/>
      <p className='text-sm text-justify'>Clone da interface do Spotify Web, construído com Tailwind.</p>
    </div>
  </div>
</div>
) }
