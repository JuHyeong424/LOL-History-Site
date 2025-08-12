import type { ObjectivesDto } from '@/types/match-v5/objective.ts';

export interface TeamDto {
  teamId: number;
  win: boolean;
  bans: BanDto[];
  objectives: ObjectivesDto;
}

export interface BanDto {
  championId: number;
  pickTurn: number;
}
