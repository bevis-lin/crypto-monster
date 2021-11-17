#!/bin/bash
export ACCESS_API=https://access-testnet.onflow.org
export WALLET_DISCOVERY=https://fcl-discovery.onflow.org/testnet/authn
export FT_CONTRACT=0xf21fee1faa18dce2
export FUSD_CONTRACT=0xf21fee1faa18dce2
export MONSTER_CONTRACT=0xf21fee1faa18dce2

export REACT_APP_ACCESS_NODE=${ACCESS_API}
export REACT_APP_WALLET_DISCOVERY=${WALLET_DISCOVERY}
export REACT_APP_FT_CONTRACT=${FT_CONTRACT}
export REACT_APP_FUSD_CONTRACT=${FUSD_CONTRACT}
export REACT_APP_MONSTER_CONTRACT=${MONSTER_CONTRACT}

npm run start