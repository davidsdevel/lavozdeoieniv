import { HTMLAttributes } from 'react';
//import {FaCheck} from 'react-icons/fa6';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: string
  label?: string
  value?: string | number
}

export function Input({id, type, label, className = '', ...props}: InputProps) {

  let _className = 'w-full ';

  const _type = type || 'text';
  //const isTextarea = _type === 'textarea';
  //const isCheckbox = _type === 'checkbox';
  const isFile = _type === 'file';
  
  /*if (isTextarea)
    _className += 'rounded-lg resize-none ';*/

  if (isFile)
    _className += ' file:border-none file:h-full file:bg-main-1 file:text-white file:rounded-full file:px-4 file:py-2 text-sm mt-2';
  else
    _className += 'rounded-lg border border-stone-200 mt-2 pr-4 py-2 pl-2 bg-white disabled:bg-stone-200';

  _className = `${_className} ${className}`;

  /*if (isCheckbox)
    return <div className='flex items-center mt-4 mb-2'>
      <span className='text-gray-700'>{label}</span>
      <button className={`ml-2 rounded-md w-4 h-4 flex items-center justify-center border-2 border-main-1 ${checked ? 'bg-main-1' : ''}`} onClick={() => onCheck(!checked)}>
        {
          checked &&
          <FaCheck className='text-white w-3 h-3'/>
        }
      </button>
    </div>;*/

  return <div className='mt-1 w-full'>
    {
      label &&
      <label htmlFor={id} className='text-xs text-stone-600'>{label}</label>
    }
    <input className={_className} type={_type} name={id} id={id} {...props}/>
  </div>;
}

export default Input;