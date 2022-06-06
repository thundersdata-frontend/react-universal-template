import { isEmpty } from 'lodash-es';
import dayjs from 'dayjs';
import { extend } from 'umi-request';
import { refreshTokenUrl } from '../../server.config';
import platform from '@mono-app/platform';

export default function umiRequest() {
  const request = extend({ timeout: 30000 });
  request.use(async (ctx, next) => {
    const token = platform.getToken();
    if (isEmpty(token)) {
      next();
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
      next();
    } else {
      // 对request的header增加accessToken配置
      ctx.req.options = {
        ...ctx.req.options,
        headers: {
          ...ctx.req.options.headers,
          accessToken: accessToken!,
        },
      };
      next();
    }
  });
  return request;
}
