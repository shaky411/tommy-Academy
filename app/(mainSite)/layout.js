import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    
    <>
      <Header/>
      <Providers>
        {/* <ThemeSwitcher /> */}
        {children}
        </Providers>
        <Footer />
        </>
        
  )
}