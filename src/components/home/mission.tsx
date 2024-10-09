export default function Mission() {
  return <div className="w-full bg-blue-400 flex items-center justify-center relative flex flex-col py-20 px-8 text-white sm:px-12 md:px-24 md:py-48">

    <div className='grid gap-2 grid-cols-1 md:gap-4 sm:grid-cols-2'>
      <div className="min-h-48 bg-center bg-cover rounded-lg" style={{backgroundImage: 'url(https://unsplash.com/photos/h0rXrHzhFXU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8cCVDMyVCM2RjYXN0fGVzfDB8fHx8MTcyMzkxMDQ0NHww&force=true&w=640)'}}></div>
      <div className='my-12 text-center p-2 sm:p-8 md:p-12'>
        <h4 className='text-2xl opacity-90 mb-4'>Entretener</h4>
        <p>Como fundacion radial parte de nuestra mision es ofrecer entretenimiento sano, contenido util y de calidad.</p>
      </div>
    </div>

    <div className='grid gap-2 grid-cols-1 md:gap-4 sm:grid-cols-2 sm:mt-32'>
      <div className="min-h-48 bg-center bg-cover rounded-lg sm:order-2" style={{backgroundImage: 'url(https://unsplash.com/photos/h0rXrHzhFXU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8cCVDMyVCM2RjYXN0fGVzfDB8fHx8MTcyMzkxMDQ0NHww&force=true&w=640)'}}></div>
      <div className='my-12 text-center p-2 sm:p-8 md:p-12 sm:order-1'>
        <h4 className='text-2xl opacity-90 mb-4'>Subtitulo</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, itaque sed corporis minima ullam unde praesentium architecto illum quam, consequatur odio exercitationem voluptas ut expedita</p>
      </div>
    </div>
  </div>;
}