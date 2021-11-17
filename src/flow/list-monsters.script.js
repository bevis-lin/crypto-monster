export const LIST_MONSTERS = `
    import MonsterContract from 0xMonsterContract

    pub fun main(): {UInt32: MonsterContract.Template} {
        let templates = MonsterContract.listTemplates()
        return templates
      }
`;
