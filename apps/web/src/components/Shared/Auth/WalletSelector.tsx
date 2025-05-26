import cn from '@/helpers/cn';
import getWalletDetails from '@/helpers/getWalletDetails';
import { KeyIcon } from '@heroicons/react/24/outline';
import { useQueryClient } from '@tanstack/react-query';
import type { FC } from 'react';
import { Link } from 'react-router';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import type { Connector } from 'wagmi';
const WalletSelector: FC = () => {
  const { connectAsync, connectors, isPending } = useConnect();
  const { connector: activeConnector } = useAccount();
  const { disconnect } = useDisconnect();
  // console.log('Providers context?', useQueryClient())

  const allowedConnectors = ['familyAccountsProvider', 'injected', 'walletConnect'];

  const filteredConnectors = connectors
    .filter((connector: any) => allowedConnectors.includes(connector.id))
    .sort(
      (a: Connector, b: Connector) =>
        allowedConnectors.indexOf(a.id) - allowedConnectors.indexOf(b.id)
    );

  const handleConnect = async (connector: Connector) => {
    try {
      await connectAsync({ connector });
    } catch {}
  };

  return activeConnector?.id ? (
    <div className="space-y-2.5">
      <button
        className="flex items-center space-x-1 text-sm underline"
        onClick={() => disconnect?.()}
        type="reset"
      >
        <KeyIcon className="size-4" />
        <div>Change wallet</div>
      </button>
    </div>
  ) : (
    <div className="inline-block w-full space-y-3 overflow-hidden text-left align-middle">
      {filteredConnectors.map((connector: any) => {
        return (
          <button
            className={cn(
              {
                'hover:bg-gray-100 dark:hover:bg-gray-700': connector.id !== activeConnector?.id,
              },
              'flex w-full items-center justify-between space-x-2.5 overflow-hidden rounded-xl border border-gray-200 px-4 py-3 outline-none dark:border-gray-700'
            )}
            type="button"
            key={connector.id}
            onClick={() => handleConnect(connector)}
            disabled={connector.id === activeConnector?.id || isPending}
          >
            <span>{getWalletDetails(connector.id).name}</span>
            <img
              alt={connector.id}
              className="size-6"
              draggable={false}
              height={24}
              src={getWalletDetails(connector.id).logo}
              width={24}
            />
          </button>
        );
      })}
      <div className="linkify text-gray-500 text-sm">
        By connecting wallet, you agree to our{' '}
        <Link to="/terms" target="_blank">
          Terms
        </Link>{' '}
        and{' '}
        <Link to="/privacy" target="_blank">
          Policy
        </Link>
        .
      </div>
    </div>
  );
};

export default WalletSelector;
