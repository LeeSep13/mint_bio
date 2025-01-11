export default {
  mounted(el, binding) {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          binding.value(); // 执行绑定的回调函数
          observer.unobserve(entry.target); // 停止观察，确保动画只执行一次
        }
      });
    }, options);

    observer.observe(el);
  },
};