import Form from './donationForm';

export default function Donate() {
  return <div className='bg-gray-100 px-4 flex sm:p-12 flex-col items-center md:flex-row md:px-24 md:py-32'>
    <div className='relative md:w-1/2 flex md:py-4 md:pr-[5%]'>
      <div className='py-12 flex text-center flex-col justify-center p-2 rounded-lg md:w-full md:p-4'>
        <h3 className="text-4xl text-blue-800 mb-8 md:text-6xl">Tu aporte es importante</h3>
        <p className='text-slate-600 md:text-lg'>Como fundación nuestros motivos no son comerciales, por esa razon tu aporte monetario será de ayuda para sustentar, mantener, crecer y expansión nuestro alcance, y así seguir llevando mensajes con valores cristianos dentro y fuera de nuestras fronteras.</p>
      </div>
    </div>
    <div className='w-full py-12 relative flex justify-center items-center sm:w-2/3 md:w-1/2'>
      <Form/>
    </div>
  </div>;
}
