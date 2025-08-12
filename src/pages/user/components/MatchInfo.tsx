import useMatchInfo from '@/hooks/fetch/useMatchInfo.ts';

interface matchInfoProps {
  matchId?: string;
}

export default function MatchInfo({ matchId }: matchInfoProps) {
  const {
    data: matchInfo,
    isLoading: matchInfoIsLoading,
    isError: matchInfoIsError,
  } = useMatchInfo({ matchId: matchId ?? '', enabled: !!matchId });

  if (matchInfoIsLoading) return <p>매치 정보 로딩중...</p>;
  if (matchInfoIsError) return <p>매치 정보 로드 중 에러 발생</p>;

  return (
    <>
      {matchInfo && (
        <>
          <p>{matchInfo.metadata.matchId}</p>
          <p>{matchInfo.info.gameCreation}</p>
        </>
      )}
    </>
  );
}
