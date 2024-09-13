export default function CTA() {
  return <div className='bg-slate-800 grid grid-cols-1 gap-2 p-2 md:py-12 sm:grid-cols-2 md:px-4 md:py-24 md:grid-cols-3'>
    <div className='pr-2 py-4 md:py-8 md:pr-8'>
      <h3 className='text-center text-2xl text-white md:text-5xl md:text-right'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero porro, sint quibusdam est deserunt mollitia et veniam</h3>
    </div>
    <div className='bg-cover bg-center rounded-xl min-h-64 md:col-span-2' style={{backgroundImage: 'url(https://unsplash.com/photos/c1ZN57GfDB0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmFkaW98ZXN8MHx8fHwxNzIzNzUyMTk4fDA&force=true&w=640)'}}>
    </div>
  </div>;
}