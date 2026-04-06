import { WagmiProvider } from 'wagmi'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { config } from '@/lib/wagmi'

const queryClient = new QueryClient()

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}