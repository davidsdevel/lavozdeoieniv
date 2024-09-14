import Link from 'next/link';
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function Header() {
  return <header className="w-full bg-slate-900 p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 md:p-4">
    <div className='relative flex flex-col bg-white rounded-xl pt-12 pb-4 px-4 md:p-20 md:flex-row md:justify-between md:items-end'>
      <div className='md:w-4/5'>
        <h1 className='text-blue-500 md:text-xl'>La voz de OIENIV</h1>
        <h2 className='text-3xl text-slate-700 md:text-5xl mt-4 mb-8 md:mb-16'>Llevando valores Cristianos a través de los medios de comunicación</h2>
        <Link href='/donar' className='text-center px-4 py-2 rounded-full block bg-blue-800 text-white w-full'>Apoyar</Link>
      </div>
      <div className='flex py-4 justify-center gap-2 md:flex-col md:absolute md:top-28 md:right-12'>
        <a href='/' target='_blank'>
          <CiFacebook className='text-slate-600 h-8 w-8'/>
        </a>
        <a href='/' target='_blank'>
          <CiInstagram className='text-slate-600 h-8 w-8'/>
        </a>
        <a href='/' target='_blank'>
          <CiTwitter className='text-slate-600 h-8 w-8'/>
        </a>
        <a href='/ws' target='_blank'>
          <BiLogoWhatsapp className='text-slate-600 h-8 w-8'/>
        </a>
      </div>
    </div>
    <div className='bg-cover bg-center rounded-xl min-h-64' style={{backgroundImage: 'url(https://unsplash.com/photos/c1ZN57GfDB0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmFkaW98ZXN8MHx8fHwxNzIzNzUyMTk4fDA&force=true&w=640)'}}>
    </div>
  </header>;
}
