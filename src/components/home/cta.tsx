export default function CallToAction() {
  return <div className='bg-slate-800 p-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:p-4 md:gap-4'>
    <div className="min-h-64 w-full rounded-xl bg-center bg-cover"  style={{backgroundImage: 'url(https://unsplash.com/photos/h0rXrHzhFXU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8cCVDMyVCM2RjYXN0fGVzfDB8fHx8MTcyMzkxMDQ0NHww&force=true&w=640)'}}></div>

    <div className='relative flex flex-col bg-white rounded-xl py-12 px-4 md:p-24'>
      <h3 className='text-blue-500 md:text-xl'>Titulo de la descripcion</h3>
      <p className='text-3xl md:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia impedit dolore nemo. Perspiciatis dolorum at sit, necessitatibus maiores obcaecati iure perferendis tempore eaque neque, assumenda sint non cum pariatur!</p>
    </div>
  </div>;
}
