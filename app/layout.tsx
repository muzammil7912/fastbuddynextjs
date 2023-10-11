import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './dist/sass/main.scss'
import Header from './componets/header'
import Footer from './componets/footer'


const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Fast Buddys - Digital Media On Demand Global',
  description: 'We offer a comprehensive range of services, including Graphic Design, Web Design, Social Media Marketing, and Print Design. Our dedicated team is always available to provide you with support and assistance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
