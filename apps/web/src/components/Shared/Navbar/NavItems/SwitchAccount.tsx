import cn from '@/helpers/cn';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

interface SwitchAccountProps {
  className?: string;
}

const SwitchAccount = ({ className = '' }: SwitchAccountProps) => {
  return (
    <button
      className={cn(
        'flex w-full items-center space-x-1.5 px-2 py-1.5 text-left text-gray-700 text-sm dark:text-gray-200',
        className
      )}
      onClick={() => console.log(11111)}
      type="button"
    >
      <ArrowsRightLeftIcon className="size-4" />
      <span>Switch account</span>
    </button>
  );
};

export default SwitchAccount;
