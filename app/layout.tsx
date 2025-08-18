import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ankit Kumar | Product Manager Portfolio',
  description: 'Product Manager specializing in user-centric solutions, agile methodologies, and data-driven product strategy. BCA student with proven track record in product operations.',
  keywords: 'product manager, product strategy, agile, user research, A/B testing, product roadmap, BCA, Ankit Kumar',
  authors: [{ name: 'Ankit Kumar' }],
  creator: 'Ankit Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}