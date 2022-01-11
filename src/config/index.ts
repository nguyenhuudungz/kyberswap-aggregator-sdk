import { ChainId } from '@dynamic-amm/sdk'
import { ethers } from 'ethers'

export const NETWORK_URLS: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: `https://ethereum.kyber.network/v1/mainnet/geth?appId=prod-dmm-interface`,
  [ChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [ChainId.ROPSTEN]: `https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
  [ChainId.GÖRLI]: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [ChainId.KOVAN]: `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [ChainId.MUMBAI]: `https://rpc-mumbai.maticvigil.com`,
  [ChainId.MATIC]: `https://polygon.dmm.exchange/v1/mainnet/geth?appId=prod-dmm`,
  [ChainId.BSCTESTNET]: `https://data-seed-prebsc-1-s1.binance.org:8545`,
  [ChainId.BSCMAINNET]: `https://bsc.dmm.exchange/v1/mainnet/geth?appId=prod-dmm-interface`,
  [ChainId.AVAXTESTNET]: `https://api.avax-test.network/ext/bc/C/rpc`,
  [ChainId.AVAXMAINNET]: `https://avalanche.dmm.exchange/v1/mainnet/geth?appId=prod-dmm`,
  [ChainId.FANTOM]: `https://rpcapi.fantom.network`,
  [ChainId.CRONOSTESTNET]: `https://cronos-testnet-3.crypto.org:8545`,
  [ChainId.CRONOS]: `https://evm-cronos.crypto.org`,
}

export const providers: {
  [chainId in ChainId]?: any
} = {
  [ChainId.MAINNET]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.MAINNET]),
  [ChainId.BSCMAINNET]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.BSCMAINNET]),
  [ChainId.AVAXMAINNET]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.AVAXMAINNET]),
  [ChainId.MATIC]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.MATIC]),
  [ChainId.FANTOM]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.FANTOM]),
  [ChainId.CRONOS]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.CRONOS]),
  [ChainId.ROPSTEN]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.ROPSTEN]),
  [ChainId.MUMBAI]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.MUMBAI]),
  [ChainId.AVAXTESTNET]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.AVAXTESTNET]),
  [ChainId.BSCTESTNET]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.BSCTESTNET]),
  [ChainId.CRONOSTESTNET]: new ethers.providers.JsonRpcProvider(NETWORK_URLS[ChainId.CRONOSTESTNET]),
}

//https://router.firebird.finance/bsc/route
export const routerUri: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: `https://aggregator-api.kyber.org/ethereum/route`,
  [ChainId.BSCMAINNET]: `https://aggregator-api.kyber.org/bsc/route`,
  [ChainId.MATIC]: `https://aggregator-api.kyber.org/polygon/route`,
  [ChainId.AVAXMAINNET]: `https://aggregator-api.kyber.org/avalanche/route`,
  [ChainId.FANTOM]: `https://aggregator-api.kyber.org/fantom/route`,
  [ChainId.CRONOS]: `https://aggregator-api.kyber.org/cronos/route`,
}

export const AGGREGATION_EXECUTOR: { [chainId in ChainId]?: string } = {
  [ChainId.BSCMAINNET]: '0xd12bcdfb9a39be79da3bdf02557efdcd5ca59e77',
  [ChainId.MATIC]: '0xd12bcdfb9a39be79da3bdf02557efdcd5ca59e77',
  [ChainId.AVAXMAINNET]: '0xd12bcdfb9a39be79da3bdf02557efdcd5ca59e77',
  [ChainId.MAINNET]: '0xd12bcdfb9a39be79da3bdf02557efdcd5ca59e77',
  [ChainId.FANTOM]: '0xd12bcdfb9a39be79da3bdf02557efdcd5ca59e77',
  [ChainId.CRONOS]: '0xd12bcdfb9a39be79da3bdf02557efdcd5ca59e77',
}

export const ETHER_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

export const ZERO_HEX = '0x0'
