import * as utils from '@mono-app/utils';

export const platform = utils.platform.loadPlatform(process.env.TARO_ENV as PlatformType);
