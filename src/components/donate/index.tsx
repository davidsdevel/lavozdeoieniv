'use client';

import Header from './header';
import Donate from './donate';
import CTA from './cta';
import Support from './support';
import { PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';

const isProd = !!process.env.VERCEL

export default function DonationPage() {
  const initialOptions: ReactPayPalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
    vault: true,
    environment: isProd ? 'production' : 'sandbox',
    currency: 'USD'
  };

  return <main>
    <PayPalScriptProvider options={initialOptions}>
      <Header/>
      <Donate/>
      <CTA/>
      <Support/>
    </PayPalScriptProvider>
  </main>;
}
