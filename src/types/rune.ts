interface Rune {
  id: number;
  key: string;
  icon: string;
  name: string;
}

interface RuneSlot {
  runes: Rune[];
}

export interface RuneTree {
  id: number;
  key: string;
  icon: string;
  name: string;
  slots: RuneSlot[];
}
