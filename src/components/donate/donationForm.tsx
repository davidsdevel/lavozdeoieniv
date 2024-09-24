'use client';

import {useState} from 'react';
import RecurrentDonationForm from './recurrentDonationForm';
import SingleDonationForm from './singleDonationForm';
import {CiSquareChevLeft, CiCircleCheck} from 'react-icons/ci';
import CurrencyInput from '../currencyInput';
import { PaypalAccountInfo } from './paypalButton';

export default function DonationForm() {
  const [isRecurrent, setIsRecurrent] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [step, setStep] = useState(0);

  const [name, setName] = useState('');

  const changeRecurrent = (recurrent: boolean) => {
    setIsRecurrent(recurrent);
    setStep(1);
  };

  const changeAmount = (amount: number) => {
    setAmount(amount);
    setStep(2);
  };

  const succesFunds = (account: PaypalAccountInfo) => {
    
    //TODO: Register email
    setName(account.name.given_name);
    setIsRecurrent(false);
    setAmount(1000);
    setStep(3);
  };

  return <div className='bg-white p-w rounded-xl flex flex-col min-h-80 w-96 md:p-4'>
    <div className='h-12'>
      <button disabled={step === 0} onClick={() => setStep(step - 1)} className='disabled:text-slate-500 disabled:text-slate-200'>
        <CiSquareChevLeft className='h-8 w-8'/>
      </button>
    </div>
    <div className='flex-grow flex items-center border border-slate-100 rounded-xl p-4'>
      {
        step === 0 &&
        <div className='w-full grid gap-2 grid-cols-1 mb-2'>
          <div className='flex justify-center mb-4'>
            <span>Seleccione el tipo de aporte</span>
          </div>
          <button
            className='transition-all ease duration-150 bg-blue-400 rounded-lg text-white py-4 hover:bg-blue-300'
            onClick={() => changeRecurrent(true)}
          >
            Aporte Mensual
          </button>
          <button
            className='transition-all ease duration-150 bg-blue-400 rounded-lg text-white py-4 hover:bg-blue-300'
            onClick={() => changeRecurrent(false)}
          >
            Aporte Unico
          </button>
        </div>
      }
      {
        step === 1 &&
        <div className='w-full'>
          <div className='flex justify-center mb-4'>
            <span>Seleccione el monto del aporte</span>
          </div>
          <div className='grid grid-cols-2 gap-2 w-full mb-4'>
            <button
              className='transition-all ease duration-150 bg-blue-400 rounded-lg text-white py-4 hover:bg-blue-300'
              onClick={() => changeAmount(500)}
            >
              $5
            </button>
            <button
              className='transition-all ease duration-150 bg-blue-400 rounded-lg text-white py-4 hover:bg-blue-300'
              onClick={() => changeAmount(1000)}
            >
              $10
            </button>
            <button
              className='transition-all ease duration-150 bg-blue-400 rounded-lg text-white py-4 hover:bg-blue-300'
              onClick={() => changeAmount(2000)}
            >
              $20
            </button>
            <button
              className='transition-all ease duration-150 bg-blue-400 rounded-lg text-white py-4 hover:bg-blue-300'
              onClick={() => changeAmount(5000)}
            >
              $50
            </button>
          </div>
          {
            !isRecurrent &&
            <>
              <hr/>
              <div>
                <CurrencyInput
                  label='Monto personalizado'
                  onChangeValue={value => setAmount(value * 100)}
                  value={amount / 100}
                  negative={false}
                  currency='$'
                  decimals={2}
                />
                <button
                  className='transition-all ease duration-150 bg-blue-400 rounded-lg text-white py-4 w-full mt-2 hover:bg-blue-300'
                  onClick={() => changeAmount(amount)}
                >
                  Seleccionar
                </button>
              </div>
            </>
          }
        </div>
      }
      {
        step === 2 &&
        <div className='w-full flex-grow'>
          {
            isRecurrent
              ? <RecurrentDonationForm amount={amount}/>
              : <>
                <div className='flex justify-center'>
                  <span>Aportar ${amount / 100}</span>
                </div>
                <SingleDonationForm onDonation={account => succesFunds(account)} amount={amount}/>
              </>
          }
        </div>
      }
      {
        step === 3 && 
        <div className='w-full flex-grow'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <CiCircleCheck className='h-12 w-12 text-green-400'/>
            <span className='text-center'>Gracias por apoyarnos <b>{name}</b>. Su aporte nos aydará a seguir llevando mensajes con valores a más personas.</span>
          </div>
        </div>
      }
    </div>
  </div>;
}
