export interface PuuidData {
  puuid: string;
  gameName: string;
  tagLine: string;
}

export interface UserData {
  puuid: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export interface userGameData {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  puuid: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export interface userInfoProps {
  puuid: string;
  enabled: boolean;
}
