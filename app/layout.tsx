import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: "Yanda's services",
  description: " Yanda's se donne d’être un acteur important dans le développement de la RDC et de la France en apportant des produits innovants et des solution afin d’améliorer le quotidien. ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
