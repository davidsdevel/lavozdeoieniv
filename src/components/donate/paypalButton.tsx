import { PropsWithChildren } from 'react';
import {CgSpinner} from 'react-icons/cg';
import { PayPalButtons, PayPalButtonsComponentProps, usePayPalScriptReducer } from '@paypal/react-paypal-js';

export interface PaypalAccountInfo {
  email_address: string;
  payer_id: string;
  name: Record<string, any>
  phone?: Record<string, any>
  birth_date?: string | undefined;
  tax_info?: Record<string, any>
  address?: Record<string, any>
}

interface PatreonButtonProps extends PropsWithChildren {
  amount: number | string
  onDonation(account: PaypalAccountInfo): void //eslint-disable-line
}

export default function PatreonButton({amount, onDonation}: PatreonButtonProps) {
  const numberAmount = parseInt(amount as string);

  const paypalAmount = (numberAmount / 100).toFixed(2);

  const [scriptReducer] = usePayPalScriptReducer();

  const styles: PayPalButtonsComponentProps['style'] = {
    shape: 'pill',
    layout: 'vertical',
    color: 'white'
  };

  const messages: PayPalButtonsComponentProps['message']  = {
    amount: numberAmount
  };

  const createOrder: PayPalButtonsComponentProps['createOrder'] = function createOrder(data, actions) {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            value: paypalAmount,
            currency_code: 'USD'
          }
        }
      ]
    });
  };

  const onApproveOrder: PayPalButtonsComponentProps['onApprove'] = async function onApproveOrder(data,actions) {
    const order = actions.order;

    if (!order)
      return;

    return order.capture().then(details => {
      const account = details.payer;

      onDonation(account as PaypalAccountInfo);
    });
  };

  return <div className='mt-4'>
    {
      scriptReducer.isPending &&
      <CgSpinner className='m-auto w-8 h-8 text-slate-800 animate-spin'/>
    }
    <PayPalButtons
      forceReRender={[amount]}
      style={styles}
      message={messages}
      createOrder={(data, actions) => createOrder(data,actions)}
      onApprove={(data,actions) => onApproveOrder(data,actions)}
    />
  </div>;
}
