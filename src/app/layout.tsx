import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QuioscoProvider } from '@/context/QuioscoProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiosco',
  description: 'Quiosco para gerenciar tus pedidos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuioscoProvider>
          {children}
        </QuioscoProvider>
      </body>
    </html>
  )
}
