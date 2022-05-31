import rnPlatform from './rn';
import h5Platform from './h5';
import miniPlatform from './mini';

export function loadPlatform(platform: string) {
  switch (platform) {
    case 'rn':
      return rnPlatform;
    case 'h5':
      return h5Platform;
    case 'weapp':
    case 'swan':
    case 'alipay':
    case 'tt':
    case 'qq':
    case 'jd':
      return miniPlatform;
    default:
      throw new Error(`不支持的平台: ${platform}`);
  }
}
