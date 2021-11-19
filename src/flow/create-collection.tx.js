export const CREATE_COLLECTION = `
  import MonsterContract from 0xMonsterContract
  
  transaction {
    prepare(acct: AuthAccount) {
      let collection <- MonsterContract.createEmptyCollection()
      acct.save<@MonsterContract.Collection>(<-collection, to: MonsterContract.CollectionStoragePath)
      acct.link<&{MonsterContract.CollectionPublic}>(MonsterContract.CollectionPublicPath, target: MonsterContract.CollectionStoragePath)
    }
  }
`;
