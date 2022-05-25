import rnPlatform from './platform/rn';
import h5Platform from './platform/h5';
import miniPlatform from './platform/mini';

export function loadPlatform(platform: string) {
  switch (platform) {
    case 'RN':
      return rnPlatform;
    case 'H5':
      return h5Platform;
    case 'MINI':
      return miniPlatform;
    default:
      throw new Error(`不支持的平台: ${platform}`);
  }
}
