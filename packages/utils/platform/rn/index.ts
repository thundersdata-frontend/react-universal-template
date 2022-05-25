export default {
  name: 'rn',

  getToken(): Token {
    return {
      accessToken: 'rn',
      refreshToken: 'rn',
      tokenExpireTime: 24 * 60 * 3600 + '',
    };
  },

  updateStorage(key: string, value: any) {
    console.log(key, value);
  },
};
