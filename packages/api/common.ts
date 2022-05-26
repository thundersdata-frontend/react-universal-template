import { extend, fetch, ResponseError } from 'umi-request';
import { isEmpty } from 'lodash-es';
import dayjs from 'dayjs';

import * as utils from '@mono-app/utils';
import { refreshTokenUrl } from './server.config';

const codeMessage: Record<number, string> = {
  400: '请求参数错误，请检查',
  401: '您没有权限',
  403: '您访问的资源被禁止',
  404: '请求地址不存在',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};

export function errorHandler(error: ResponseError) {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    throw new Error(
      JSON.stringify({
        message: errorText,
        description: `请求错误 ${status}: ${url}`,
      }),
    );
  }
  throw error;
}

export const initRequest = async () => {
  const request = extend({
    timeout: 30000,
    errorHandler,
  });

  const platform = utils.loadPlatform(process.env.platform ?? 'RN');

  /** 使用中间件在请求前进行token的校验 */
  request.use(async (ctx, next) => {
    const token = platform.getToken();
    if (isEmpty(token)) {
      await next();
      return;
    }
    const { accessToken, refreshToken, tokenExpireTime } = token;

    // 判断当前日期是否晚于tokenExpireTime，如果是表示token已经过期，需要用refreshToken去换一个新的token
    if (dayjs().isAfter(dayjs(tokenExpireTime))) {
      const result = await fetch(`${refreshTokenUrl}?refreshToken=${refreshToken}`).then(response => response.json());
      const { data } = result;
      platform.updateStorage('Token', data);

      // 对request的header增加accessToken配置
      ctx.req.options = {
        ...ctx.req.options,
        headers: {
          ...ctx.req.options.headers,
          accessToken: data.accessToken!,
        },
      };
      await next();
    } else {
      // 对request的header增加accessToken配置
      ctx.req.options = {
        ...ctx.req.options,
        headers: {
          ...ctx.req.options.headers,
          accessToken: accessToken!,
        },
      };
      await next();
    }
  });
  return request;
};
