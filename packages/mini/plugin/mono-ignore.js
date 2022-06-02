export default (ctx, options) => {
  // plugin 主体
  ctx.onBuildStart(() => {
    console.log('编译开始！');
  });
  // ctx.modifyWebpackChain(config => {
  //   console.log(config);
  // });

  // 方法不存在
  // ctx.modifyBuildTempFileContent(args => {
  //   console.log('中间文件：');
  //   console.log(args);
  // });
  ctx.onBuildFinish(() => {
    console.log('Webpack 编译结束！');
  });
  ctx.onBuildComplete(() => {
    console.log('Taro 构建完成！');
  });
};
