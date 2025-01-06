import React from 'react'
import NavHeader from './nav'
import FooterHeader from './footer'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="flex col-span-1 max-[800px]:col-span-2 top-0 h-screen max-[800px]:h-auto min-[800px]:sticky  gap-3">
      <div className="h-full py-24 px-14 max-[800px]:px-2 flex-col  flex">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#c3d7d9] dark:text-[#c3d7d9] relative item-s text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter">
            Álvaro Cerezo Pedrero
          </h1>
          <h2 className="dark:text-[#9fadad] text-[#9fadad] item-s text-transparent bg-clip-text tracking-tighter text-gradient text-xl">
            Software Engineer & AI Enthusiast
          </h2>
          <p className="w-96 max-[700px]:w-full opacity-80 dark:text-[#c0c8c8] text-[#c0c8c8] item-s text-transparent text-gradient bg-clip-text leading-5">
            {/* I create innovative AI solutions by exploring and experimenting with cutting-edge technologies. */}
            I create innovative solutions by exploring and experimenting with cutting-edge technologies.
          </p>
        </div>
        <NavHeader />
        <FooterHeader />
      </div>
    </header>
  )
}
