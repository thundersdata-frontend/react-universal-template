/**
 * @description 获取数据角色详情
 */
import * as defs from '../../baseClass';
import { initRequest } from '../../..';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = new defs.authorization.DataRoleVO();
// 接口地址
export const url = '/role/data/detail';

export async function fetch<T>(params = {}) {
  const request = initRequest();
  const result = await request.get<AjaxResponse<T>>(
    backEndUrl + '/role/data/detail',
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
