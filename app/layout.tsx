import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Farros Ilman - Portfolio',
  description: 'Ini adalah portfolio saya, Farros Ilman',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
