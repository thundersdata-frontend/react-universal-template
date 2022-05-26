import pontConfig from './pont-config.json';

export default function () {
  const result: Record<string, string> = {};
  const mockDatasources: string[] = pontConfig.mocks.containDataSources;
  pontConfig.origins.forEach(origin => {
    const { name, originUrl } = origin;
    if (mockDatasources.includes(name)) {
      result[name] = `/${name}`;
    } else {
      result[name] = originUrl.replace(/\/v[0-9]{1,}\/api-docs/, '');
    }
  });
  return result;
}

export const refreshTokenUrl = '';
