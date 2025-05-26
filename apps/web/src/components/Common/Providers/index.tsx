import { ThemeProvider } from '@/hooks/useTheme';
import type { ReactNode } from 'react';
import Web3Provider from './Web3Provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// export const queryClient = new QueryClient({
//   defaultOptions: { queries: { refetchOnWindowFocus: false } }
// });
const queryClient = new QueryClient()

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3Provider>
        <ThemeProvider>{children}</ThemeProvider>
      </Web3Provider>
    </QueryClientProvider>
  );
};

export default Providers;
