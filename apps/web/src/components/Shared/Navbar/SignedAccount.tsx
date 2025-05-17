import React from 'react';
import Image from '../UI/Image';
import { useAccountStore } from '@/store/persisted/useAccountStore';

const SignedAccount = () => {
  const { currentAccount } = useAccountStore();
  // const Avatar = () => (
  //   <Image
  //     alt={currentAccount?.address}
  //     src={}
  //   />
  // );

  return <div>SignedAccount</div>;
};

export default SignedAccount;
