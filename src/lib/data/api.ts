import axios from 'axios';
import * as R from 'ramda';

import { getLocalItem, setLocalItem } from 'lib/utils/localStorage';
import { useEffect, useState } from 'react';

export const API_STORAGE_KEY = '@@localstorage/api';

export const BASE_API_URL = 'https://api.simplyrets.com';
const API_AUTH = { username: 'simplyrets', password: 'simplyrets' };

export async function getRequest<T>(url: string): Promise<T | null> {
  const cache = getLocalItem(API_STORAGE_KEY, {}) as Record<string, any>;
  let data: T | null = null;
  if (cache[url]) {
    data = cache[url];
    return data;
  }

  try {
    const response = await axios.get<T>(`${BASE_API_URL}${url}`, {
      auth: API_AUTH,
    });

    if (response.status < 300) {
      setLocalItem(API_STORAGE_KEY, R.assoc(url, response.data, cache));
      data = response.data;
    }

    return data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development')
      console.error('getReqest error: ', error);
  } finally {
    return data;
  }
}

export function useGetRequest<T>(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const responseData = await getRequest<T>(url);
      setData(responseData);
      setIsLoading(false);
    })();
  }, [url]);

  return { isLoading, data };
}
