interface SpellImage {
  full: string;
}

interface Spell {
  id: string;
  name: string;
  key: string;
  image: SpellImage;
}

interface SpellListData {
  [key: string]: Spell;
}

export interface SummonerJsonResponse {
  type: string;
  version: string;
  data: SpellListData;
}
