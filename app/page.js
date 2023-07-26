'use client'

import Image from 'next/image'
// import Hero from '@/components/Hero'
// import Features from '@/components/Features'
import LandingPage from '@/components/LandingPage'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <>
    <AnimatePresence>
    <LandingPage />
    {/* <Hero/> */}
    {/* <Features /> */}
    </AnimatePresence>
    </>
  )
}
