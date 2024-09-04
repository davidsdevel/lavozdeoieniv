import { GoogleAnalytics } from '@next/third-parties/google';
import Player from '@/components/player';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import './globals.css';
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className='pb-20 md:pb-0'>
        <Nav/>
        {children}
        <Footer/>
        <Player/>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string}/>
      </body>
    </html>
  );
}
