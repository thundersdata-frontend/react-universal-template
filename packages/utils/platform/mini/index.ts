import Taro from '@tarojs/taro';

export default {
  name: 'mini',

  getToken(): Token {
    return {
      accessToken: 'mini',
      refreshToken: 'mini',
      tokenExpireTime: 24 * 60 * 3600 + '',
    };
  },

  updateStorage(key: string, value: any) {
    console.log(key, value);
  },

  getStorage(key: string) {
    return Taro.getStorageSync(key);
  },
} as Platform;
