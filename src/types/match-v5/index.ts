import type { Metadata } from '@/types/match-v5/metaData.ts';
import type { Info } from '@/types/match-v5/info.ts';

// 최상위 응답 타입
export interface MatchDto {
  metadata: Metadata;
  info: Info;
}
