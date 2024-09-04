import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  className: string
}

export default function Button({className, children} : ButtonProps) {
  return <button className={`px-4 py-2 rounded-full ${className}`}>
    {children}
  </button>;
}
