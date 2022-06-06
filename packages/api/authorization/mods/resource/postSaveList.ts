/**
 * @description 保存资源（批量）-这个接口仍然可以使用，但建议使用新的资源管理接口中/auth/resource/saveList
 */

import { initRequest } from '../../..';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = undefined;
// 接口地址
export const url = '/resource/saveList';

export async function fetch<T>(params = {}) {
  const request = initRequest();
  const result = await request.post<AjaxResponse<T>>(
    backEndUrl + '/resource/saveList',
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
