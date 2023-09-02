import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'


const OpenSans = Open_Sans({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  )
}
