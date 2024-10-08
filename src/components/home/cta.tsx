import { FaQuoteLeft } from 'react-icons/fa';

export default function CallToAction() {
  return <div className='bg-slate-800 p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:p-4 md:gap-4'>
    <div className="min-h-64 w-full rounded-xl bg-center bg-cover"  style={{backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}></div>

    <div className='relative flex flex-col bg-white rounded-xl py-12 px-4 md:p-24'>
      <h3 className='text-blue-500 md:text-xl'>Mateo 28:19-20 (NTV)</h3>
      <FaQuoteLeft className='w-12 h-12 text-gray-400 mt-4'/>
      <p className='text-2xl md:text-3xl'>Por lo tanto, vayan y hagan discípulos de todas las naciones, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo. Enseñen a los nuevos discípulos a obedecer todos los mandatos que les he dado. Y tengan por seguro esto: que estoy con ustedes siempre, hasta el fin de los tiempos</p>
    </div>
  </div>;
}
