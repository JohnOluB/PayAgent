import { useEffect, useState } from 'react'
import { useConnect, useAccount } from 'wagmi'
import { injected } from 'wagmi/connectors'

export function useMiniPay() {
  const { connect } = useConnect()
  const { address, isConnected } = useAccount()
  const [isMiniPay, setIsMiniPay] = useState(false)

  useEffect(() => {
    // Detect MiniPay environment
    const miniPay = (window as any).ethereum?.isMiniPay
    setIsMiniPay(!!miniPay)

    if (miniPay) {
      // Auto-connect when running inside MiniPay
      connect({ connector: injected() })
    }
  }, [connect])

  return { isMiniPay, address, isConnected }
}