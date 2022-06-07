import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'h5',
  // keepalive: [/users/],
  aconsole: {
    console: {},
    inspx: {},
  },
  define: {},
  mobileLayout: 'mobile5',
  mfsu: false,
  dva: false,
  hash: false,
  npmClient: 'yarn',
  chainWebpack: (config: any) => {
    config.resolve.mainFields.clear().add('browser').add('main');
  },
});
