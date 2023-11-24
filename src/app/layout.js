import Rodape from '../components/Rodape/Rodape.jsx'
import { Inter } from 'next/font/google'
import Cabecalho from '../components/Cabecalho/Cabecalho.jsx'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NTC HEALTH',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      
        
      {children}

      <Rodape />
      </body>
    </html>
  )
}
