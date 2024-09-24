'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';

interface ModalProps extends PropsWithChildren {
    onClose: () => void
    isOpen: boolean
}

export default function Modal({isOpen, children}: ModalProps) {
  const modalRef = useRef(null);

  useEffect(() => {

  }, [isOpen]);

  return <div ref={modalRef}>
    <div/>
    <div>{children}</div>
  </div>;
}