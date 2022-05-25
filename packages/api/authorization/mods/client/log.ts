/**
 * @description log
 */

import { initRequest } from '../../../common';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = '';
// 接口地址
export const url = '/client/log';

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/client/log', {
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