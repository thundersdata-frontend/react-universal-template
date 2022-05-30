import Taro from '@tarojs/taro';

/**
 * 初始化请求， 需要根据当前环境设置不同的请求方式。
 * -RN / h5: 用umi-request
 * -Taro: 用Taro.request
 * @returns
 */
export const initRequest = () => {
  const env = Taro.getEnv();

  // 使用 xhr 适配器的平台
  const platformsUsingXhrAdapter: Array<TaroGeneral.ENV_TYPE> = [Taro.ENV_TYPE.WEB, Taro.ENV_TYPE.RN];

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
