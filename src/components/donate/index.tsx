'use client'

import Header from './header';
import Donate from './donate';
import CTA from './cta';
import Support from './support';
import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";

export default function DonationPage() {
  const initialOptions: ReactPayPalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
    vault: true,
    intent: "subscription",
    environment: 'sandbox'
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
