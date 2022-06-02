export function loadPlatform(platform?: PlatformType): Platform {
  switch (platform) {
    case 'rn':
    default:
      return require('./rn').default;
    case 'h5':
      return require('./h5').default;
    case 'weapp':
    case 'swan':
    case 'alipay':
    case 'tt':
    case 'qq':
    case 'jd':
      return require('./mini').default;
  }
}
