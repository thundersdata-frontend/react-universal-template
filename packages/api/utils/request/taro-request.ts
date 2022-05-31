import Taro from '@tarojs/taro';
import * as utils from '@mono-app/utils';

type RequestOption = { params?: Record<string, any>; headers: Record<string, any>; data?: any };

export default function taroRequest(env: string) {
  const platform = utils.platform.loadPlatform(env);
  const token = platform.getToken();
  const { accessToken } = token;

  return {
    get(url: string, options: RequestOption) {
      const { headers, params, data } = options;
      return Taro.request({
        method: 'GET',
        url,
        data: {
          ...params,
          ...data,
        },
        header: {
          ...headers,
          accessToken,
        },
      });
    },
    post(url: string, options: RequestOption) {
      const { headers, params, data } = options;
      return Taro.request({
        method: 'POST',
        url,
        data: {
          ...params,
          ...data,
        },
        header: {
          ...headers,
          accessToken,
        },
      });
    },
  };
}
