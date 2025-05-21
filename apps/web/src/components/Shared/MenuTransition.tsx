import { Transition } from '@headlessui/react';
import { Fragment, type ReactNode } from 'react';

interface MenuTransitionProps {
  children: ReactNode;
  show?: boolean;
}

const MenuTransition = ({ children, show }: MenuTransitionProps) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
      show={show}
    >
      {children}
    </Transition>
  );
};

export default MenuTransition;
