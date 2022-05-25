export default {
  name: 'h5',

  getToken() {
    return {
      accessToken: 'h5',
      refreshToken: 'h5',
      tokenExpireTime: 24 * 60 * 3600 + '',
    };
  },

  updateStorage(key: string, value: any) {
    console.log(key, value);
  },
};
