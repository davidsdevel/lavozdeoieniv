import Input, { InputProps } from '@/components/input';
import {formatCurrency} from '@/lib/format';

interface CurrencyInputProps extends InputProps {
  currency: string
  negative: boolean
  decimals: number
  value: string | number
  onChangeValue(value: number): void //eslint-disable-line
}


export default function CurrencyInput({onChangeValue, value, currency = '', negative = false, decimals = 2, ...props}: CurrencyInputProps) {
  
  const parse = (valueString: string) => {
    const number = +formatCurrency(valueString).replace(/,/g, '');
    
    return negative ? -number : number;
  };

  const format = (valueNumber: number) => {
    let data = formatCurrency(valueNumber.toFixed(2), decimals);

    if (negative && data !== '0.00')
      data = data.replace(/-*/, '-');
  
    return `${currency}${data}`;
  };

  return <Input
    value={format(value as number)}
    onChange={e => {
      const target = e.target as HTMLInputElement;

      onChangeValue(parse(target.value));
    }}
    {...props}
  />;
}