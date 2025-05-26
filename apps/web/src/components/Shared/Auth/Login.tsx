import { useState, type Dispatch, type SetStateAction } from 'react';
import WalletSelector from './WalletSelector';

interface LoginProps {
  setHasAccounts: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setHasAccounts }: LoginProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return <WalletSelector />;
};

export default Login;
