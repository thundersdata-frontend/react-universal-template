import rnPlatform from './platform/rn';
import h5Platform from './platform/h5';
import miniPlatform from './platform/mini';

export function loadPlatform(platform: string) {
  switch (platform) {
    case 'RN':
      return rnPlatform;
    case 'WEB':
      return h5Platform;
    case 'WEAPP':
    case 'SWAN':
    case 'ALIPAY':
    case 'TT':
    case 'QQ':
    case 'JD':
      return miniPlatform;
    default:
      throw new Error(`不支持的平台: ${platform}`);
  }
}
