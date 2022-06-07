// @ts-ignore
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
    Taro.setStorageSync(key, value);
  },

  getStorage(key: string) {
    return Taro.getStorageSync(key);
  },

  navigate(path: string, params?: Record<string, any>) {
    const url = `/pages/${path}/index${
      params
        ? `?${Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join('&')}`
        : ''
    }`;
    Taro.navigateTo({
      url,
    });
  },
} as Platform;
