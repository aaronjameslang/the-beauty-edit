import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

const siteUrl = 'https://aaronjamesla.ng/the-beauty-edit'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'The Beauty Edit',
  description: 'Beauty, considered. London-based creative direction studio specialising in beauty storytelling for editorial, campaign, and runway.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'The Beauty Edit',
    description: 'Beauty, considered. London-based creative direction studio specialising in beauty storytelling for editorial, campaign, and runway.',
    url: siteUrl,
    siteName: 'The Beauty Edit',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Beauty Edit',
    description: 'Beauty, considered.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-stone-900 focus:text-stone-50 focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
