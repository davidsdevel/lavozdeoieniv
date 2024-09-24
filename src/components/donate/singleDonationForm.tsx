import PaypalButton, { PaypalAccountInfo } from './paypalButton';

interface RecurrentDonationProps {
  amount: number,
  onDonation(account: PaypalAccountInfo): void //eslint-disable-line
}

export default function RecurrentDonationForm({amount, onDonation}: RecurrentDonationProps) {
  return <div className='bg-white p-4 rounded-xl'>
    <PaypalButton amount={amount} onDonation={onDonation}/>
  </div>;
}
