import type { AccountFragment } from '@togi/indexer';
import type { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router';
import getAccount from '@togi/helpers/getAccount';
interface AccountLinkProps extends Omit<ComponentProps<typeof Link>, 'to'> {
  account: AccountFragment;
  children: ReactNode;
}

const AccountLink = ({ account, children, onClick, ...props }: AccountLinkProps) => {
  const { link } = getAccount(account);
  return (
    <div>
      <Link
        to={link}
        {...props}
        onClick={() => {
          console.log(1111);
        }}
      >
        {children}
      </Link>
    </div>
  );
};

export default AccountLink;
