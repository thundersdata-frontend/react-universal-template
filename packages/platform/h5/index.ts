// @ts-ignore
import { history, createSearchParams } from 'alita';

export default {
  name: 'h5',

  getToken(): Token {
    return {
      accessToken: 'h5',
      refreshToken: 'h5',
      tokenExpireTime: 24 * 60 * 3600 + '',
    };
  },

  updateStorage(key: string, value: any) {
    window.localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
  },

  getStorage(key: string) {
    const value = window.localStorage.getItem(key);
    try {
      return JSON.parse(value as string);
    } catch (error) {
      return value;
    }
  },

  navigate(path: string, params?: Record<string, any>) {
    const searchParams = createSearchParams(params);
    const url = `/${path}?${searchParams.toString()}`;
    history.push(url);
  },
} as Platform;
