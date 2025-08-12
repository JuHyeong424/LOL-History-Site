import type { PerksDto } from '@/types/match-v5/perks.ts';
import type { ChallengesDto } from '@/types/match-v5/challenges.ts';

export interface ParticipantDto {
  summonerName: string;
  riotIdGameName: string;
  riotIdTagline: string;
  puuid: string;
  championName: string;
  championId: number;
  win: boolean;
  kills: number;
  deaths: number;
  assists: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  summoner1Id: number;
  summoner2Id: number;
  goldEarned: number;
  totalDamageDealtToChampions: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  wardsPlaced: number;
  wardsKilled: number;
  visionScore: number;
  teamPosition: string;
  lane: string;
  champLevel: number;
  pentaKills: number;
  quadraKills: number;
  perks: PerksDto;
  challenges: ChallengesDto;
}
