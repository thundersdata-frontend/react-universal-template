/**
 * @description 查询ResourcesForDetails
 */
import * as defs from '../../baseClass';
import { initRequest } from '../../..';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = new defs.authorization.ResourcesForDetails();
// 接口地址
export const url = '/resource/detail';

export async function fetch<T>(params = {}) {
  const request = initRequest();
  const result = await request.get<AjaxResponse<T>>(
    backEndUrl + '/resource/detail',
    {
      headers: {
        'Content-Type': 'application/json',
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
