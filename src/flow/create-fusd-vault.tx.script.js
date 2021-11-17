export const CREATE_FUSD_VAULT = `
  import FungibleToken from 0xFungibleToken
  import FUSD from 0xFUSD

  transaction {
    prepare(signer: AuthAccount) {
      if(signer.borrow<&FUSD.Vault>(from: /storage/cryptomonfusdVault) != nil) {
        return
      }
    
      signer.save(<-FUSD.createEmptyVault(), to: /storage/cryptomonfusdVault)

      signer.link<&FUSD.Vault{FungibleToken.Receiver}>(
        /public/cryptomonfusdReceiver,
        target: /storage/cryptomonfusdVault
      )

      signer.link<&FUSD.Vault{FungibleToken.Balance}>(
        /public/cryptomonfusdBalance,
        target: /storage/cryptomonfusdVault
      )
    }
  }
`;
