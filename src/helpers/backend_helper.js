import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

export const fetchMultiplayer = (query) =>
  api.get(`${url.API_URL.MULTIPLAYER}`, query);
