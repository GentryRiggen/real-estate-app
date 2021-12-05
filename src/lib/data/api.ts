import axios from 'axios';
import * as R from 'ramda';

import { getLocalItem, setLocalItem } from 'lib/utils/localStorage';

export const BASE_API_URL = 'https://api.simplyrets.com';
export const API_CACHE_KEY = 'API';
const API_AUTH = { username: 'simplyrets', password: 'simplyrets' };

export async function getRequest<T>(url: string): Promise<T | null> {
  const cache = getLocalItem(API_CACHE_KEY, {}) as Record<string, any>;
  let data: T | null = null;
  if (cache[url]) {
    data = cache[url];
    return data;
  }

  const response = await axios.get<T>(`${BASE_API_URL}${url}`, {
    auth: API_AUTH,
  });

  if (response.status < 300)
    setLocalItem(API_CACHE_KEY, R.assoc(url, response.data, cache));

  return response.data;
}
