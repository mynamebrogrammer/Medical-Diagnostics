import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Medical Device',
  description: 'Empowering Healthcare Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title></title>
        {/* Add meta tags, stylesheets, and scripts here */}
      </head>
      <body className={inter.className}>
        {/* Header */}
        <header className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-4 text-center">
          <h1 className="mt-2 text-lg">N Gen Diagnostics</h1>
        </header>

        {/* Main Content */}
        <main>{children ? <React.Fragment>{children}</React.Fragment> : null}</main>

        {/* Footer */}
        <footer className="bg-blue-700 text-white py-4 text-center">
          <p>&copy; {new Date().getFullYear()} N Gen Diagnostics</p>
        </footer>
      </body>
    </html>
  )
}
