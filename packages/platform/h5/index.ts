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
    console.log(key, value);
  },

  getStorage(key: string) {
    return window.localStorage.getItem(key);
  },
} as Platform;
