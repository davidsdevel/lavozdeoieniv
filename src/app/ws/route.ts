import {redirect} from 'next/navigation';
import {headers} from 'next/headers';

export const GET = async () => {
  const headerList = headers();
  const userAgent = headerList.get('user-agent') as string;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  const message = encodeURI('Hola, encontré su contacto a través de su sitio web');
  
  const url = isMobile ? `whatsapp://send?text=${message}&phone=${process.env.NEXT_PUBLIC_WHATSAPP}` : `https://web.whatsapp.com/send?text=${message}&phone=${process.env.NEXT_PUBLIC_WHATSAPP}`;

  return redirect(url);
};