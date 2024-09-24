import Link from 'next/link';

export default function Donation() {
  return <div className='bg-gray-100 px-4 flex sm:p-12 flex-col items-center md:flex-row md:px-24 md:py-32'>
    <div className='relative md:w-1/2 flex md:py-4 md:pr-[5%]'>
      <div className='py-12 flex text-center flex-col justify-center p-2 rounded-lg md:w-full md:p-4'>
        <h3 className="text-4xl text-blue-800 mb-8 md:text-6xl">Ayudanos a llegar a mas personas</h3>
        <p className='text-slate-600 md:text-lg'>Forma parte de nuestra mision, hay distintas maneras en que puedes apoyarnos. Tu suscripcion ayudará al crecimiento y cumplimiento de la mision de llevar mensajes con valores Cristianos. Descubre las distintas maneras de apoyarnos.</p>
        <Link href='/donar' className='text-center px-4 py-2 rounded-full block bg-blue-800 text-white w-full mt-8 md:mt-16'>Apoyar</Link>
      </div>
    </div>
    <div className='w-full relative h-[420px] sm:w-2/3 md:w-1/2 md:h-[540px]'>
      <div className="absolute bg-slate-600 w-3/4 left-[2.5%] top-4 bg-center bg-cover rounded-lg h-64 md:h-96 md:w-2/3 md:left-[5%]"></div>
      <div className="absolute shadow-lg shadow-slate-600 w-3/4 left-[22.5%] top-36 bg-center bg-cover rounded-lg h-64 md:h-96 md:t-40 md:w-2/3 md:left-[28.34%]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1554200876-907f9286c2a1?w=640&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D)'}}></div>
    </div>
  </div>;
}
