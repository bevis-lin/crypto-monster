export const MINT_MONSTER = `
  import MonsterContract from 0xMonsterContract
  import FUSD from 0xFUSD
  import FungibleToken from 0xFungibleToken


  transaction(templateID: UInt32, amount: UFix64) {
    let receiverReference: &MonsterContract.Collection{MonsterContract.Receiver}
    let sentVault: @FungibleToken.Vault

    prepare(acct: AuthAccount) {
      self.receiverReference = acct.borrow<&MonsterContract.Collection>(from: MonsterContract.CollectionStoragePath) 
          ?? panic("Cannot borrow")
      let vaultRef = acct.borrow<&FUSD.Vault>(from: /storage/fusdVault) ?? panic("Could not borrow FUSD vault")
      self.sentVault <- vaultRef.withdraw(amount: amount)
    }

    execute {
      let newMonster <- MonsterContract.mintMonster(templateID: templateID, paymentVault: <-self.sentVault)
      self.receiverReference.deposit(token: <-newMonster)
    }
  }
`;
