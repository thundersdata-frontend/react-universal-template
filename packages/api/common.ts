/**
 * 初始化请求， 需要根据当前环境设置不同的请求方式。
 * -RN / h5: 用umi-request
 * -Taro: 用Taro.request
 * @returns
 */
export const initRequest = () => {
  const env = process.env.TARO_ENV;

  // 使用 xhr 适配器的平台
  const platformsUsingXhrAdapter = ['rn', 'h5'];

  // 非使用 xhr 适配器的平台一律使用 Taro 适配器
  if (platformsUsingXhrAdapter.includes(env)) {
    /** 使用中间件在请求前进行token的校验 */
    const request = require('./utils/request/umi-request').default(env);
    return request;
  } else {
    const request = require('./utils/request/taro-request').default(env);
    return request;
  }
};
