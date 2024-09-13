'use client';

import { useState } from 'react';
import PatreonButton from './patreonButton';
import PaypalButton from './paypalButton';

const amounts = [
  {
    amount: 500,
    label: '5$'
  },
  {
    amount: 1000,
    label: '10$'
  },
  {
    amount: 2000,
    label: '20$'
  },
  {
    amount: 5000,
    label: '50$'
  }
];

export default function RecurrentDonationForm() {
  const [amount, setAmount] = useState(1000);

  return <div className='bg-white p-4 rounded-xl'>
    <div className='grid grid-cols-4 gap-2'>
      {
        amounts.map(e => {
          return <button key={e.label} className='transition-all ease duration-150 bg-blue-400 text-white p-3 rounded-lg md:px-6 hover:bg-blue-300 disabled:bg-white disabled:text-blue-400' onClick={() => setAmount(e.amount)} disabled={amount === e.amount}>{e.label}</button>;
        })
      }
    </div>
    <hr className='my-4'/>
    <PatreonButton amount={amount}/>
    <PaypalButton amount={amount}/>
  </div>;
}
