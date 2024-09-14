export default function CTA() {
  return <div className='bg-slate-800 grid grid-cols-1 gap-2 p-2 md:py-12 sm:grid-cols-2 md:px-4 md:py-24'>
    <div className='pr-2 py-4 md:py-8 md:pr-8 flex flex-col items-end'>
      <h3 className='text-center text-xl text-white md:text-3xl md:text-right mb-8'>Es mejor ser dos que uno, porque ambos pueden ayudarse mutuamente a lograr el éxito. Si uno cae, el otro puede darle la mano y ayudarle; pero el que cae y está solo, ese sí que está en problemas.</h3>
      <span className='text-center opacity-70 text-white md:text-xl md:text-right'>Eclesiastés 4:9-10</span>
    </div>
    <div className='bg-cover bg-center rounded-xl min-h-64' style={{backgroundImage: 'url(https://unsplash.com/photos/c1ZN57GfDB0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmFkaW98ZXN8MHx8fHwxNzIzNzUyMTk4fDA&force=true&w=640)'}}>
    </div>
  </div>;
}