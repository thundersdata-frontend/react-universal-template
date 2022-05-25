/**
 * @description 获取ResourceRole列表（含分页）
 */
import * as defs from '../../baseClass';
import { initRequest } from '../../../common';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = new defs.authorization.PagingEntity();
// 接口地址
export const url = '/role/resource/listByBusinessValues';

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.post(
    backEndUrl + '/role/resource/listByBusinessValues',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params,
    },
  );
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