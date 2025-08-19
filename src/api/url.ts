import { MATCH_ID_COUNT, MATCH_ID_START } from '@/constant/match.ts';
import { CHAMPION_COUNT, LOL_PATCH_VERSION } from '@/constant/champion.ts';

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
  `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${MATCH_ID_START}&count=${MATCH_ID_COUNT}&api_key=${LOLAPI}`;

export const MATCH_INFO = (matchId: string) =>
  `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${LOLAPI}`;

export const CHAMPION_ID = (puuid: string) =>
  `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=${CHAMPION_COUNT}&api_key=${LOLAPI}`;

export const CHAMPION_INFO_URL = `https://ddragon.leagueoflegends.com/cdn/${LOL_PATCH_VERSION}/data/ko_KR/champion.json`;

export const CHAMPION_IMAGE = (image: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${LOL_PATCH_VERSION}/img/champion/${image}`;

export const CHAMPION_IMAGE_PNG = (image: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${LOL_PATCH_VERSION}/img/champion/${image}.png`;

export const ITEM_IMAGE_PNG = (image: number) =>
  `https://ddragon.leagueoflegends.com/cdn/${LOL_PATCH_VERSION}/img/item/${image}.png`;

export const SPELL_IMAGE = (image: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${LOL_PATCH_VERSION}/img/spell/${image}`;

export const SPELL_INFO = `https://ddragon.leagueoflegends.com/cdn/${LOL_PATCH_VERSION}/data/ko_KR/summoner.json`;

export const RUNES_INFO = `https://ddragon.leagueoflegends.com/cdn/${LOL_PATCH_VERSION}/data/ko_KR/runesReforged.json`;

export const RUNES_IMAGE = (image: string) =>
  `https://ddragon.leagueoflegends.com/cdn/img/${image}`;
