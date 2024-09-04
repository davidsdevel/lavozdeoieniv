import Link from 'next/link';
import Form from './donateForm';

export default function Donate() {
  return <div className='bg-gray-100 px-4 flex sm:p-12 flex-col items-center md:flex-row md:px-24 md:py-32'>
    <div className='relative md:w-1/2 flex md:py-4 md:pr-[5%]'>
      <div className='py-12 flex text-center flex-col justify-center p-2 rounded-lg md:w-full md:p-4'>
        <h3 className="text-4xl text-blue-800 mb-8 md:text-6xl">Titulo de la descripcion</h3>
        <p className='text-slate-500 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia impedit dolore nemo. Perspiciatis dolorum at sit, necessitatibus maiores obcaecati iure perferendis tempore eaque neque, assumenda sint non cum pariatur!</p>
        <Link href='/donar' className='text-center px-4 py-2 rounded-full block bg-blue-800 text-white w-full mt-8 md:mt-16'>Apoyar</Link>
      </div>
    </div>
    <div className='w-full relative flex justify-center items-center sm:w-2/3 md:w-1/2'>
      <Form/>
    </div>
  </div>;
}
