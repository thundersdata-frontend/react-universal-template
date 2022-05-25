export default {
  name: 'mini',

  getToken() {
    return {
      accessToken: 'mini',
      refreshToken: 'mini',
      tokenExpireTime: 24 * 60 * 3600 + '',
    };
  },

  updateStorage(key: string, value: any) {
    console.log(key, value);
  },
};
