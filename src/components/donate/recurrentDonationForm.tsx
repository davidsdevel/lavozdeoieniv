import PatreonButton from './patreonButton';
//import PaypalButton from './paypalRecurrentButton';


export default function RecurrentDonationForm({amount}: {amount: number}) {
  return <div className='bg-white p-4 rounded-xl'>
    <PatreonButton amount={amount}/>
    {/*<PaypalButton amount={amount}/>*/}
  </div>;
}
