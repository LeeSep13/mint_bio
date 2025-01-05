import Intersect from './intersect';

const directives = {
  Intersect, // 监听可视范围内元素执行动画
};

export default {
  install(app) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key]);
    });
  },
};