import useMatchInfo from '@/hooks/fetch/useMatchInfo.ts';
import useMatchDetail from '@/hooks/useMatchDetail.ts';
import { CHAMPION_IMAGE_PNG, ITEM_IMAGE_PNG, SPELL_IMAGE } from '@/api/url.ts';

interface matchInfoProps {
  puuidData?: string;
  matchId?: string;
}

export default function MatchInfo({ puuidData, matchId }: matchInfoProps) {
  const {
    data: matchInfo,
    isLoading: matchInfoIsLoading,
    isError: matchInfoIsError,
  } = useMatchInfo({ matchId: matchId ?? '', enabled: !!matchId });

  if (matchInfoIsLoading) return <p>매치 정보 로딩중...</p>;
  if (matchInfoIsError) return <p>매치 정보 로드 중 에러 발생</p>;
  if (!matchInfo) return <p>매치 데이터를 찾을 수 없습니다.</p>;

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
    keystoneRune,
    secondaryRune,
  } = useMatchDetail({ matchInfo, puuidData });

  console.log(spell1Image);

  return (
    // me.win에 따라 부모 div에 클래스명을 주어 CSS로 배경색 등을 제어할 수 있습니다.
    <div className={`match-card ${me.win ? 'win' : 'loss'}`}>
      {/*
        여기에 OP.GG와 같은 상세한 UI를 구성합니다.
        아래는 정보를 어떻게 꺼내 쓰는지에 대한 기본 구조 예시입니다.
        실제로는 styled-components나 emotion을 사용해 컴포넌트로 분리하는 것이 좋습니다.
      */}

      {/* 게임 전체 정보 */}
      <div className="game-stats">
        <p>{gameType}</p>
        <p>{timeAgo}</p>
        <p style={{ color: me.win ? 'blue' : 'red' }}>{gameResult}</p>
        <p>{gameDuration}</p>
      </div>

      {/* 내 플레이어 정보 */}
      <div className="player-stats">
        <img
          src={CHAMPION_IMAGE_PNG(me.championName)}
          alt={me.championName}
          width="48"
          height="48"
        />
        <img
          src={SPELL_IMAGE(spell1Image)}
          alt={spell1Image}
        />
        <img
          src={SPELL_IMAGE(spell2Image)}
          alt={spell2Image}
        />
        {/* TODO: summonerId, perkId를 이미지로 변환하는 로직 필요 */}
        <div>
          <p>{me.kills} / <span style={{ color: 'red' }}>{me.deaths}</span> / {me.assists}</p>
          <p>KDA: {kda}</p>
          <p>킬관여: {killParticipation}%</p>
          <p>골드: {goldInK}K</p>
        </div>
      </div>

      {/* 아이템 및 기타 정보 */}
      <div className="item-stats">
        <div className="items">
          {items.map((itemId, index) => (
            <img
              key={index}
              src={ITEM_IMAGE_PNG(itemId)}
              alt={`item-${itemId}`}
              width="24"
              height="24"
            />
          ))}
        </div>
        <div>
          <p>제어와드: {me.detectorWardsPlaced}</p>
          <p>CS: {totalCS}</p>
        </div>
      </div>

      {/* 참가자 목록 */}
      <div className="participant-lists">
        <div className="ally-team">
          {allyTeam.map(p => (
            <div key={p.puuid} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <img src={CHAMPION_IMAGE_PNG(p.championName)} width="16" height="16" />
              <span>{p.riotIdGameName}</span>
            </div>
          ))}
        </div>
        <div className="enemy-team">
          {enemyTeam.map(p => (
            <div key={p.puuid} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <img src={CHAMPION_IMAGE_PNG(p.championName)} width="16" height="16" />
              <span>{p.riotIdGameName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
