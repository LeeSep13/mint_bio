/*
 * @Author: glitter xinyu@sjzn.com
 * @Date: 2024-12-16 22:12:51
 * @LastEditors: glitter xinyu@sjzn.com
 * @LastEditTime: 2025-01-05 22:08:55
 * @FilePath: /mint_bio/src/postcss.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
        selectorBlackList: ['fixedPx', 'pc-layout', 'mobile-layout', 'popover-content', 'popover-close'], //表示这个类不允许把px转换为rem
        replace: false, //作用暂时没发现
        mediaQuery: false, //允许在媒体查询中转换px
        minPixelValue: 0, //设置要替换的最小像素值
        exclude: [/node_modules/i, /public/] //表示目录中的样式不参与转换
      }
    }
  }
}
