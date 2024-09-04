import Link from 'next/link';

export default function Header() {
  return <header className="w-full bg-slate-900 p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 md:p-4">
    <div className='relative flex flex-col bg-white rounded-xl pt-12 pb-4 px-4 md:p-24 md:flex-row md:justify-between md:items-end'>
      <div>
        <h1 className='text-blue-500 md:text-xl'>La voz de OIENIV</h1>
        <h2 className='text-3xl text-slate-700 md:text-5xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quam quae architecto laboriosam omnis dolore</h2>
        <Link href='/donar' className='text-center px-4 py-2 rounded-full block bg-blue-800 text-white w-full mt-8 md:mt-16'>Apoyar</Link>
      </div>
    </div>
    <div className='bg-cover bg-center rounded-xl min-h-64' style={{backgroundImage: 'url(https://unsplash.com/photos/c1ZN57GfDB0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmFkaW98ZXN8MHx8fHwxNzIzNzUyMTk4fDA&force=true&w=640)'}}>
    </div>
  </header>;
}
