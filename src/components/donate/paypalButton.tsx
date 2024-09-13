import { PropsWithChildren } from 'react';
import {CgSpinner} from 'react-icons/cg';
import { PayPalButtons, PayPalButtonsComponentProps, usePayPalScriptReducer } from '@paypal/react-paypal-js';

interface PatreonButtonProps extends PropsWithChildren {
  amount: number | string
}

export default function PatreonButton({amount}: PatreonButtonProps) {
  const numberAmount = parseInt(amount as string);

  const [scriptReducer] = usePayPalScriptReducer()

  const styles: PayPalButtonsComponentProps["style"] = {
    shape: "pill",
    layout: "vertical",
    label: 'subscribe',
    color: 'white'
  };

  const messages: PayPalButtonsComponentProps['message']  = {
    amount: numberAmount
  }

  const createSubscription: PayPalButtonsComponentProps["createSubscription"] = (data, actions) => {
    return actions.subscription.create({
      plan_id: 'P-04Y0725884211411XM3QHZRQ'
    });
  }

  const onApprove: PayPalButtonsComponentProps["onApprove"] = async (data) => {
    alert(`You have successfully subscribed to ${data.subscriptionID}`); // Optional message given to subscriber
  }

  return <div className='mt-4'>
    {
      scriptReducer.isPending &&
      <CgSpinner className='m-auto w-8 h-8 text-slate-800 animate-spin'/>
    }
    <PayPalButtons
      style={styles}
      message={messages}
      createSubscription={createSubscription}
      onApprove={onApprove}
    />
  </div>
}

/*
5$ P-9PL66233CP010340MM3QG3HQ
10$ P-9VJ74176AF034443HM3QG5QA
        
*/