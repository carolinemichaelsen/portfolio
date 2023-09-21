import Head from 'next/head'
import DropdownMenu from '@/components/Menu'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Caroline Michaelsen</title>
      </Head>
      <div className=" text-zinc-900 bg-gradient-to-r from-purple-300 to-indigo-400">
        <DropdownMenu />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  )
}
