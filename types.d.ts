declare global {
  export type Player = {
    username: string;
    image_url?: string;
    items?: number;
    wealth_index?: number;
    zone?: string;
  };

  export type FullLeaderboardResponse = {
    leaderboard: {
      players: Player[];
    };
  };

  type Population = {
    [key: string]: number;
  };

  type Item = {
    createdAt?: Date;
    name: string;
    number?: number;
    rarity: number;
    zone?: string;
    count?: number;
  };

  interface MetaResponse {
    meta: {
      latestSpawned: Item;
      mostSpawned: Item;
      leastSpawned: Item;
      population: Population;
      latestClaim: {
        player: Player;
        item: Item;
      };
      newestPlayer: Player;
    };
  }

  interface InventoryResponse {
    inventory: {
      total: number;
      items: Item[];
      location: string;
      spawn_date: Date | null;
      players_in_zone: number;
      wealth_index: number;
    };
  }
}

export {};
