import { defineChain } from 'viem'
 
export const zetaChain = defineChain({
  id: 7000,
  name: 'Zetachain',
  nativeCurrency: { name: 'Ether', symbol: 'ZETA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://zetachain-evm.blockpi.network/v1/rpc/public'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://zetachain.blockscout.com' },
  },
  contracts: {
     
  },
});