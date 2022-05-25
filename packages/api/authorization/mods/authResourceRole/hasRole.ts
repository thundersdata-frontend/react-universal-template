/**
 * @description 校验用户是否已经绑定该角色
 */

import { initRequest } from '../../../common';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = false;
// 接口地址
export const url = '/auth/role/resource/hasRole';

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/auth/role/resource/hasRole', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data;
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}