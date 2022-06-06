/**
 * @description 保存ResourceRole并绑定用户角色
 */

import { initRequest } from '../../..';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = undefined;
// 接口地址
export const url = '/role/resource/save/addUser';

export async function fetch<T>(data = {}) {
  const request = initRequest();
  const result = await request.post<AjaxResponse<T>>(
    backEndUrl + '/role/resource/save/addUser',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
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
