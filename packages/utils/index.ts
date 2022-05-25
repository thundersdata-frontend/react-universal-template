import rnPlatform from './platform/rn';
import h5Platform from './platform/h5';
import miniPlatform from './platform/mini';

export function loadPlatform(platform: string) {
  switch (platform) {
    case 'RN':
      return rnPlatform;
    case 'h5':
      return h5Platform;
    case 'mini':
      return miniPlatform;
    default:
      throw new Error(`unknown platform: ${platform}`);
  }
}