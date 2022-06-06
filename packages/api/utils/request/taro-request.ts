import Taro from '@tarojs/taro';
import platform from '@mono-app/platform';

type RequestOption = { params?: Record<string, any>; headers: Record<string, any>; data?: any };

export default function taroRequest() {
  const token = platform.getToken();
  const { accessToken } = token;

  return {
    async get<T = any, U = any>(url: string, options: RequestOption) {
      const { headers, params, data } = options;
      const result = await Taro.request<T, U>({
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
      return result.data;
    },
    async post<T = any, U = any>(url: string, options: RequestOption) {
      const { headers, params, data } = options;
      const result = await Taro.request<T, U>({
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
      return result.data;
    },
  };
}
