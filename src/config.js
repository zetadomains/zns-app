import { zetaChain } from "./zetaChain";
import { http, createConfig } from 'wagmi'
import { mainnet, goerli, zetachainAthensTestnet } from 'wagmi/chains'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'
import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const projectId = process.env.REACT_APP_PROJECT_ID
  
export const metadata = {
  name: 'Zeta Domains',
  description: ''
}

export const chains = [mainnet, goerli, zetaChain, zetachainAthensTestnet];

export const wagmiConfig = createConfig({
    chains: chains,
    transports: { 
      [mainnet.id]: http(),
      [goerli.id]: http("https://eth-goerli.g.alchemy.com/v2/"+ process.env.REACT_APP_ALCHEMY_KEY),
      [zetachainAthensTestnet.id]: http(),
      [zetaChain.id]: http(),
    },
    connectors: [
      walletConnect({ projectId, metadata, showQrModal: true }),
      injected({ shimDisconnect: true }),
      coinbaseWallet({
        appName: metadata.name
      })
    ]
});

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHAPI_URL,
  cache: new InMemoryCache()
})
