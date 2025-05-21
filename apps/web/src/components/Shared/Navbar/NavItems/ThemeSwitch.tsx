import cn from '@/helpers/cn';

interface ThemeSwitchProps {
  className?: string;
  onClick?: () => void;
}
const ThemeSwitch = ({ className = '', onClick }: ThemeSwitchProps) => {
  return (
    <button
      className={cn(
        'flex w-full items-center space-x-1.5 px-2 py-1.5 text-left text-gray-700 text-sm dark:text-gray-200',
        className
      )}
      onClick={() => {
        // toggleTheme();
        // onClick?.();
      }}
      type="button"
    >
      <div>Dark mode</div>
    </button>
  );
};

export default ThemeSwitch;
