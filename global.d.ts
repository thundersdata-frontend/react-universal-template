declare module 'react-native-mmkv' {
  export class MMKV {
    getAllKeys: () => string[];
    getBoolean: (key: string) => boolean;
    getString: (key: string) => string;
    delete: (key: string) => void;
    set: (key: string, value: string | number | boolean) => void;
  }
}

type PlatformType = 'h5' | 'rn' | 'weapp' | 'alipay' | 'tt' | 'swan' | 'qq' | 'jd' | 'quickapp';

interface Token {
  accessToken?: string;
  refreshToken?: string;
  tokenExpireTime?: string;
  tokenExpiresIn?: number;
  userId?: number;
  ispassword?: boolean;
}

interface AjaxResponse<T = any> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}

type Obj = Record<string, any>;

interface Page<T> {
  list?: Array<T>;
  page?: number;
  pageSize?: number;
  total?: number;
  totalPage?: number;
}

type UserInfo = {
  userId?: number;
  userName?: string;
  profilePicture?: string;
};
interface Platform {
  name: 'rn' | 'h5' | 'mini';
  ref?: any;
  getToken(): Token;
  updateStorage<T>(key: string, value: T): void;
  getStorage(key: string): Record<string, any> | string | undefined;
  navigate(path: string, params?: Record<string, any>);
}
