import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { formatGameDuration } from '@/hooks/fetch/useTimeModeChange.ts';
import { QUEUE_TYPE_MAP } from '@/constant/map.ts';
import useSpellInfo from '@/hooks/fetch/useSpellInfo.ts';

export default function useMatchDetail({ matchInfo, puuidData }) {
  // 검색 유저 정보
  const me = matchInfo.info.participants.find((p) => p.puuid === puuidData.puuid);
  console.log("me", me);

  const totalGold = me.goldEarned;
  console.log(totalGold);

  const goldInK = (totalGold / 1000).toFixed(1);

  // 아군 팀
  const allyTeam = matchInfo.info.participants.filter(p => p.teamId === me.teamId);
  console.log("allyTeam", allyTeam);

  // 적 팀
  const enemyTeam = matchInfo.info.participants.filter(p => p.teamId !== me.teamId);
  console.log('enenmyTeam', enemyTeam);

  // 승패
  const gameResult = me.win ? '승리' : '패배';
  console.log(gameResult);

  // 게임 종류
  const gameType = QUEUE_TYPE_MAP[matchInfo.info.queueId] || '기타';
  console.log(gameType);

  // 게임 시간
  const gameDuration = formatGameDuration(matchInfo.info.gameDuration);
  console.log(gameDuration);

  // 현재로부터 며칠 전 게임인지
  const timeAgo = formatDistanceToNow(new Date(matchInfo.info.gameEndTimestamp), {
    addSuffix: true,
    locale: ko,
  });
  console.log(timeAgo);

  // kda
  const kda = me.challenges.kda.toFixed(2);
  console.log(kda);

  // 킬 관여율
  const killParticipation = Math.round(me.challenges.killParticipation * 100);
  console.log(killParticipation);

  // cs
  const totalCS = me.totalMinionsKilled + me.neutralMinionsKilled;
  console.log(totalCS);

  // item slot
  const items = [me.item0, me.item1, me.item2, me.item3, me.item4, me.item5, me.item6].filter(
    (id) => id !== 0
  );
  console.log(items);

  const { findSpellImage } = useSpellInfo();

  const spell1 = me.summoner1Id;
  const spell2 = me.summoner2Id;

  const spell1Image = findSpellImage(spell1);
  const spell2Image = findSpellImage(spell2);

  const keystoneRune = me.perks.styles[0].selections[0].perk;
  const secondaryRune = me.perks.styles[1].style;

  return {
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
  };
}
