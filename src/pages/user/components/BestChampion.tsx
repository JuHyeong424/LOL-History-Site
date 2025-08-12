import useChampionInfo from '@/hooks/fetch/useChampionInfo.ts';
import { CHAMPION_IMAGE } from '@/api/url.ts';
import type { ChampionData } from '@/types/champion/championId.ts';

interface BestChampionProps {
  championId: ChampionData[] | undefined;
  championIsLoading: boolean;
  championIsError: boolean;
}

export default function BestChampion({
  championId,
  championIsLoading,
  championIsError,
}: BestChampionProps) {
  const bestChampionId = championId?.map((champion) => champion.championId) ?? [];

  const {
    data: championInfo,
    isLoading: championInfoIsLoading,
    isError: championInfoIsError,
  } = useChampionInfo({ enabled: Boolean(bestChampionId) });

  const bestChampionInfo = championInfo.filter((champ) =>
    bestChampionId.includes(Number(champ.key))
  );

  console.log(bestChampionInfo);

  if (championIsLoading || championInfoIsLoading) return <p>챔피언 정보 로딩중...</p>;
  if (championIsError || championInfoIsError) return <p>챔피언 정보 로드 중 에러 발생</p>;

  return (
    <>
      {bestChampionInfo &&
        bestChampionInfo.map((item) => (
          <div key={item.key}>
            <p>{item.name}</p>
            <img src={CHAMPION_IMAGE(item.image.full)} alt={item.image.group} />
          </div>
        ))}
    </>
  );
}
