import 'bootstrap/dist/css/bootstrap.css';
import './styles/page.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Script from 'next/script';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zesty | Home',
  description: 'Created by Joshua Prensica using Next.js framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"/>
    </html>
  )
}
