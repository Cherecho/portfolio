import type { Metadata } from 'next'
import { Archivo, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Display: Archivo, run wide and heavy. Engineered rather than literary.
const display = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-display',
  display: 'swap'
})

const body = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
})

// Utility face for dates, labels and anything that reads as data.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cherecho.github.io/portfolio/'),
  title: 'Álvaro Cerezo Pedrero — Software Engineer, Backend & Data Platforms',
  description:
    'Software engineer in Madrid building Python APIs, backend services and the data pipelines behind them. Four years across financial systems, cloud data platforms and renewable-energy operations.',
  icons: { icon: './favicon.png' },
  openGraph: {
    title: 'Álvaro Cerezo Pedrero — Software Engineer',
    description:
      'Python APIs, backend services and data-intensive processing systems.',
    // Versioned filename: link previews cache the image by URL, so a new name
    // is what actually forces Discord, Slack and X to fetch the current card.
    images: [
      {
        url: './og-v2.png',
        width: 1200,
        height: 630,
        alt: 'Álvaro Cerezo Pedrero — software engineer, backend and data platforms'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Álvaro Cerezo Pedrero — Software Engineer',
    description:
      'Python APIs, backend services and data-intensive processing systems.',
    images: ['./og-v2.png']
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        {/* Reveal/rise start hidden and are uncovered by CSS+JS. With
            scripting off, show everything immediately instead of a blank page. */}
        <noscript>
          <style>{`.reveal,.rise{opacity:1!important;transform:none!important;filter:none!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body className="bg-ground font-sans text-ink antialiased">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
