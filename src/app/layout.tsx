import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageContainer from '../components/PageContainer'

export const metadata = {
  title: 'Emad Elmontaser — Software Developer',
  description: 'Personal portfolio of Emad Elmontaser — software projects, skills, and contact.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 py-12">
            <PageContainer>{children}</PageContainer>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
