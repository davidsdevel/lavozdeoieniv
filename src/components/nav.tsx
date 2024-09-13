'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {CiFacebook, CiInstagram, CiMenuBurger, CiTwitter, CiCircleRemove} from 'react-icons/ci';

export default function Nav() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const prevScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current  > 300 && isTop) {
        setIsTop(false);
      }
      if (prevScrollY.current < 300 && !isTop) {
        setIsTop(true);
      }

      prevScrollY.current = currentScrollY;
    };
    
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTop]);

  const Links = () => <div className='hidden md:block'>
    <ul className='w-full flex items-center justify-end'>
      <li className='p-4'>
        <Link className='transition-all ease duration-150 py-3 px-6 block rounded-lg text-blue-400 font-bold text-lg hover:bg-blue-300 hover:text-white' href="/">Inicio</Link>
      </li>
      <li className='p-4'>
        <Link className='transition-all ease duration-150 py-3 px-6 block rounded-lg text-blue-400 font-bold text-lg hover:bg-blue-300 hover:text-white' href="/donar">Donaci&oacute;n</Link>
      </li>
    </ul>
  </div>;
  
  const MenuButton = () => <div className='block md:hidden'>
    <ul className='w-full flex items-center justify-end'>
      <li className='p-4'>
        <button className='p-2 block rounded-lg text-blue-400' onClick={() => setIsOpen(true)}>
          <CiMenuBurger/>
        </button>
      </li>
    </ul>
  </div>;

  return <nav className='p-2 bg-slate-900 md:p-4'>
    <div id='nav' className='bg-white w-full  rounded-lg shadow'>
      <Links/>
      <MenuButton/>
    </div>
    <div id='fixed-nav' className={`transition-all ease duration-500 z-20 bg-white fixed left-0 w-full rounded-bl-lg rounded-br-lg shadow ${isTop ? '-top-[100%]' : 'top-0'}`}>
      <Links/>
      <MenuButton/>
    </div>
    <div id='sidenav' className={`z-30 transition-all fixed top-0 w-full h-full ${isOpen ? 'left-0' : '-left-[100%]'}`}>
      <div className='absolute top-0 left-0 w-full h-full bg-white flex justify-center items-center'>
        <div className='absolute top-5 right-5 z-10'>
          <button onClick={() => setIsOpen(false)}>
            <CiCircleRemove className='h-6 w-6 text-blue-400'/>
          </button>
        </div>
        <ul className='flex flex-col items-center gap-4'>
          <li>
            <Link href='/' className='text-blue-400 text-xl text-center'>Inicio</Link>
          </li>
          <li>
            <Link href='/donar' className='text-blue-400 text-xl text-center'>Donaci&oacute;n</Link>
          </li>
          <li className='flex py-4 justify-center gap-2'>
            <CiFacebook className='text-slate-600 h-8 w-8'/>
            <CiInstagram className='text-slate-600 h-8 w-8'/>
            <CiTwitter className='text-slate-600 h-8 w-8'/>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}
