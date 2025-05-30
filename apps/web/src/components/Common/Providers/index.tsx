import { ThemeProvider } from '@/hooks/useTheme';
import type { ReactNode } from 'react';
import Web3Provider from './Web3Provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import apolloClient from '@togi/indexer/apollo/client';
import { ApolloProvider } from '@apollo/client';
import authLink from '@/helpers/authLink';

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
});

const lensApolloClient = apolloClient(authLink);

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3Provider>
        <ApolloProvider client={lensApolloClient}>
          <ThemeProvider>{children}</ThemeProvider>
        </ApolloProvider>
      </Web3Provider>
    </QueryClientProvider>
  );
};

export default Providers;
