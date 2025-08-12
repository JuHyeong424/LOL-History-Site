import type { ParticipantDto } from '@/types/match-v5/participant.ts';
import type { TeamDto } from '@/types/match-v5/team.ts';

export interface Info {
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  gameMode: string;
  gameType: string;
  gameVersion: string;
  mapId: number;
  platformId: string;
  queueId: number;
  participants: ParticipantDto[];
  teams: TeamDto[];
  tournamentCode?: string;
}
