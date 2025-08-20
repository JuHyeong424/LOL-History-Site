import useMatchInfo from '@/hooks/fetch/useMatchInfo.ts';
import useMatchDetail from '@/hooks/useMatchDetail.ts';
import { CHAMPION_IMAGE_PNG, ITEM_IMAGE_PNG, RUNES_IMAGE, SPELL_IMAGE } from '@/api/url.ts';
import type { PuuidData } from '@/types/user.ts';
import {
  AllyTeam,
  ChampionImage,
  EnemyTeam,
  GameStatus,
  ImageWrapper,
  ItemBox,
  ItemStatus,
  MatchInfoWrapper,
  MatchKDAInfo,
  MoreButton,
  ParticipantLists,
  PlayerStatus,
  RuneImageWrapper,
  SpellImageWrapper,
  SpellRuneContent,
  TeamList,
} from '@/pages/user/styles/matchInfo.styles.ts';
import { useState } from 'react';

interface matchInfoProps {
  puuidData?: PuuidData;
  matchId?: string;
}

export default function MatchInfo({ puuidData, matchId }: matchInfoProps) {
  const [click, setClick] = useState(false);
  const {
    data: matchInfo,
    isLoading: matchInfoIsLoading,
    isError: matchInfoIsError,
  } = useMatchInfo({ matchId: matchId ?? '', enabled: !!matchId });

  const matchDetail = useMatchDetail({ matchInfo, puuidData });

  if (matchInfoIsLoading) return <p>매치 정보 로딩중...</p>;
  if (matchInfoIsError) return <p>매치 정보 로드 중 에러 발생</p>;
  if (!matchInfo) return <p>매치 데이터를 찾을 수 없습니다.</p>;
  if (!matchDetail) return null;

  const {
    me,
    allyTeam,
    enemyTeam,
    gameResult,
    gameDuration,
    timeAgo,
    kda,
    totalCS,
    items,
    killParticipation,
    gameType,
    goldInK,
    spell1Image,
    spell2Image,
    keystoneRuneImage,
    secondaryRuneImage,
  } = matchDetail;

  if (!me) return null;

  return (
    <MatchInfoWrapper win={me.win}>
      {/* 게임 전체 정보 */}
      <GameStatus>
        <div>
          <p>{gameType}</p>
          <p style={{ color: me.win ? 'blue' : 'red' }}>{gameResult}</p>
        </div>
        <div>
          <p>{gameDuration}</p>
          <p>{timeAgo}</p>
        </div>
      </GameStatus>

      {/* 내 플레이어 정보 */}
      <PlayerStatus>
        <ImageWrapper>
          <ChampionImage src={CHAMPION_IMAGE_PNG(me.championName)} alt={me.championName} />
          <SpellRuneContent rune={!!keystoneRuneImage}>
            <SpellImageWrapper>
              {spell1Image && <img src={SPELL_IMAGE(spell1Image)} alt={spell1Image} />}
              {spell2Image && <img src={SPELL_IMAGE(spell2Image)} alt={spell2Image} />}
            </SpellImageWrapper>
            <RuneImageWrapper>
              {keystoneRuneImage && (
                <img src={RUNES_IMAGE(keystoneRuneImage)} alt={keystoneRuneImage} />
              )}
              {secondaryRuneImage && (
                <img src={RUNES_IMAGE(secondaryRuneImage)} alt={secondaryRuneImage} />
              )}
            </RuneImageWrapper>
          </SpellRuneContent>
        </ImageWrapper>
        <MatchKDAInfo>
          <p>
            {me.kills} / <span style={{ color: 'red' }}>{me.deaths}</span> / {me.assists}
          </p>
          <p>KDA: {kda}</p>
          <p>킬관여: {killParticipation}%</p>
          <p>골드: {goldInK}K</p>
          <div>
            <p>제어와드: {me.detectorWardsPlaced}</p>
            <p>CS: {totalCS}</p>
          </div>
          {/* 아이템 및 기타 정보 */}
          <ItemStatus>
            {Array.from({ length: 6 }).map((_, index) => {
              const itemId = items[index];
              return (
                <ItemBox key={index}>
                  {itemId && <img src={ITEM_IMAGE_PNG(itemId)} alt={`item-${itemId}`} />}
                </ItemBox>
              );
            })}
          </ItemStatus>
        </MatchKDAInfo>
      </PlayerStatus>
      <MoreButton onClick={() => setClick((prev) => !prev)}>{click ? '접기' : '더보기'}</MoreButton>
      {click && (
        <>
          {/* 참가자 목록 */}
          <ParticipantLists>
            <AllyTeam>
              {allyTeam.map((p) => (
                <TeamList
                  key={p.puuid}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <img
                    src={CHAMPION_IMAGE_PNG(p.championName)}
                    width="16"
                    height="16"
                    alt={CHAMPION_IMAGE_PNG(p.championName)}
                  />
                  <span>{p.riotIdGameName}</span>
                </TeamList>
              ))}
            </AllyTeam>
            <p className="VS">VS</p>
            <EnemyTeam>
              {enemyTeam.map((p) => (
                <TeamList
                  key={p.puuid}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>{p.riotIdGameName}</span>
                  <img
                    src={CHAMPION_IMAGE_PNG(p.championName)}
                    width="16"
                    height="16"
                    alt={CHAMPION_IMAGE_PNG(p.championName)}
                  />
                </TeamList>
              ))}
            </EnemyTeam>
          </ParticipantLists>
        </>
      )}
    </MatchInfoWrapper>
  );
}
