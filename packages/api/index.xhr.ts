import { defs as authorizationDefs, authorization } from './authorization';
import request from './utils/request/xhr-request';

export const initRequest = () => {
  return request();
};

export const defs = {
  authorization: authorizationDefs,
};
export const API = {
  authorization,
};
