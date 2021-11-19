export const LIST_USER_MONSTERS = `
  import MonsterContract from 0xMonsterContract

  pub fun main(addr: Address): {UInt64: MonsterContract.Template}? {
    let account = getAccount(addr)
    
    if let ref = account.getCapability<&{MonsterContract.CollectionPublic}>(MonsterContract.CollectionPublicPath)
                .borrow() {
                  let monsters = ref.listMonsters()
                  return monsters
                }
    
    return nil
  }
`;
