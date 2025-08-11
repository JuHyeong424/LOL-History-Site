import { MATCH_IC_COUNT, MATCH_ID_START } from '@/constant/match.ts';

const LOLAPI = import.meta.env.VITE_RIOT_LOL_API_KEY;

export const PUIID_URL = (userName: string) =>
  `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${userName}/KR1?api_key=${LOLAPI}`;

export const SUMMONER_URL = (puuid: string) =>
  `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${LOLAPI}`;

export const PROFILE_ICON_URL = (profileiconId: number) =>
  `https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${profileiconId}.png`;

export const USER_GAME_INFO_URL = (puuid: string) =>
  `https://kr.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=${LOLAPI}`;

export const MATCH_ID = (puuid: string) =>
  `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${MATCH_ID_START}&count=${MATCH_IC_COUNT}&api_key=${LOLAPI}`;
