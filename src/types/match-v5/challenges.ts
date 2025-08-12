export interface ChallengesDto {
  kda?: number;
  killParticipation?: number;
  damagePerMinute?: number;
  goldPerMinute?: number;
  [key: string]: number | undefined;
}
