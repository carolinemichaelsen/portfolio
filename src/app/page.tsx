import DropdownMenu from '@/components/Menu'
import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <main className=" text-zinc-900 bg-gradient-to-r from-purple-300 to-indigo-400">
      <DropdownMenu />
      <Hero />
      <About />
    </main>
  )
}
