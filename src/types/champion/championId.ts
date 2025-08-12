export interface ChampionMilestoneRequirement {
  [grade: string]: number;
}

export interface ChampionNextSeasonMilestone {
  requireGradeCounts: ChampionMilestoneRequirement;
  rewardMarks: number;
  bonus: boolean;
  totalGamesRequires: number;
}

export interface ChampionData {
  puuid: string;
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  markRequiredForNextLevel: number;
  tokensEarned: number;
  championSeasonMilestone: number;
  milestoneGrades?: string[];
  nextSeasonMilestone: ChampionNextSeasonMilestone;
}
