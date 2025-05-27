import { useState, type Dispatch, type SetStateAction } from 'react';
import WalletSelector from './WalletSelector';
import { useAccountsAvailableQuery } from '@togi/indexer';
import { data } from 'react-router';
import { useAccount } from 'wagmi';

interface LoginProps {
  setHasAccounts: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setHasAccounts }: LoginProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const { address, connector: activeConnector } = useAccount();

  const { data, loading } = useAccountsAvailableQuery({
    onCompleted: (data) => {
      setHasAccounts(data?.accountsAvailable.items.length > 0);
      setIsExpanded(true);
    },
    skip: !address,
    variables: {
      accountsAvailableRequest: { managedBy: address },
      lastLoggedInAccountRequest: { address },
    },
  });

  return activeConnector?.id ? (
    <div className="space-y-3">
      <div className="space-y-2.5">
        22222
      </div>
    </div>
  ): (
    <WalletSelector />
  )
};

export default Login;
