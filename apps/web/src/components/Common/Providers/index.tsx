import { ThemeProvider } from '@/hooks/useTheme'
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
