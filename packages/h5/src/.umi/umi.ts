// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import './core/polyfill';
import '/Users/damon/Documents/thundersdata/frontend/react-universal-template/packages/h5/src/global.less';
import { renderClient } from '/Users/damon/Documents/thundersdata/frontend/react-universal-template/packages/h5/node_modules/@umijs/renderer-react';
import { getRoutes } from './core/route';
import { createPluginManager } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from 'umi';
import VConsole from '/Users/damon/Documents/thundersdata/frontend/react-universal-template/packages/h5/node_modules/@alita/plugins/compiled/vconsole';
import '/Users/damon/Documents/thundersdata/frontend/react-universal-template/packages/h5/src/.umi/plugin-hd/hd.tsx';

async function render() {
  const pluginManager = createPluginManager();
  const { routes, routeComponents } = await getRoutes(pluginManager);

  // allow user to extend routes
  await pluginManager.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: {
      routes,
      routeComponents,
    },
  });

  return (pluginManager.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue() {
      const contextOpts = pluginManager.applyPlugins({
        key: 'modifyContextOpts',
        type: ApplyPluginsType.modify,
        initialValue: {},
      });
      const basename = contextOpts.basename || '/';
      const context = {
        routes,
        routeComponents,
        pluginManager,
        rootElement: contextOpts.rootElement || document.getElementById('root'),
        history: createHistory({
          type: 'hash',
          basename,
        }),
        basename,
      };
      return renderClient(context);
    },
  }))();
}


import { getPluginManager } from './core/plugin';
  
  import { setRequestConfig } from '/Users/damon/Documents/thundersdata/frontend/react-universal-template/packages/h5/node_modules/@alita/request';
render();
const c = new VConsole({});
setRequestConfig(getPluginManager().applyPlugins({ key: 'request',type: 'modify', initialValue: {} }))