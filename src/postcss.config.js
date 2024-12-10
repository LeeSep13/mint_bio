/**
 * pc端字体一般固定不变，不要在组件文件里设置字体
 */
module.exports = () => {
  return {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16, //表示根元素字体大小或根据输入参数返回根元素字体大小
        unitPrecision: 5, //精确到多少位。
        propList: ['*'], //表示允许从px转换为rem的样式
        selectorBlackList: ['fixedPx', 'pc-layout', 'mobile-layout'], //表示这个类不允许把px转换为rem
        replace: false, //作用暂时没发现
        mediaQuery: false, //允许在媒体查询中转换px
        minPixelValue: 0, //设置要替换的最小像素值
        exclude: [/node_modules/i, /public/] //表示目录中的样式不参与转换
      }
    }
  }
}
