const LOLAPI = import.meta.env.VITE_RIOT_LOL_API_KEY;

export const PUIID_URL = (userName: string) =>
  `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${userName}/KR1?api_key=${LOLAPI}`;
