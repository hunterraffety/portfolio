// app/layout.tsx
import './styles/globals.scss'
import type { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

interface LayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <head>
        <title>Hunter Raffety | Portfolio</title>
        <meta name='description' content="Hunter Raffety's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
