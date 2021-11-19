export const CHECK_COLLECTION = `
  import MonsterContract from 0xMonsterContract
  
  pub fun main(addr: Address): Bool {
    let ref = getAccount(addr).getCapability<&{MonsterContract.CollectionPublic}>(MonsterContract.CollectionPublicPath).check()
    return ref
  }
`;
