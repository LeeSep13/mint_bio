export const getWidth = () => {
  const html = document.querySelector('html')
  let currentWidth = html.clientWidth
  if (!html) {
    console.error('HTML element not found');
    return;
  }
  return {
    currentWidth, html
  }

}
/**
 * 由于先上pc端 
 * 统一判断是pc端
 * @returns true:pc端 false:移动端
 */
export const validPcOrPhone = () => {
  // const { currentWidth
  // } = getWidth()
  // if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
  //   return false;
  // }
  // if (!currentWidth) {
  //   console.error('HTML element not found');
  //   return;
  // }
  return true;
}

/**
 * 根据宽度判断是否是pc端
 * 判断pc端还是移动端
 * @returns true:pc端 false:移动端
 */
// export const validPcOrPhone = () => {
//   const { currentWidth
//   } = getWidth()
//   if (!currentWidth) {
//     console.error('HTML element not found');
//     return;
//   }
//   if (currentWidth < 992) {
//     return false;
//   }
//   return true;
// }

const getFontBase = (width, map) => {
  for (const range of map) {
    if (width >= range.min && width <= range.max) {
      return range.font;
    }
  }
  return map[map.length - 1].font;
}


/**
 * 设计稿宽度为1780 390
 * 设置根字体
 * sm >= 576
 * md >= 768
 * lg >= 992
 * xl >= 1200
 * xxl >= 1400
 */
export const autoFont = () => {
  let fontBase = 16
  let designWidth
  let { currentWidth, html } = getWidth()
  // 按照比例计算此区间会字体越来越小/大，需要重新设置基础字体大小
  const fontMapPc = [
    { min: 1200, max: 1780, font: 16 },
    { min: 992, max: 1200, font: 16 },
    { min: 1780, max: Infinity, font: 16 },
  ];

  const fontMapMobile = [
    { min: 768, max: 992, font: 6 },
    { min: 576, max: 768, font: 8 },
    { min: 476, max: 576, font: 10 },
    { min: 400, max: 476, font: 13 },
    { min: 0, max: 400, font: 14 },
  ];
  if (validPcOrPhone()) {
    designWidth = 1780;
    fontBase = getFontBase(currentWidth, fontMapPc);
  } else {
    designWidth = 390;
    fontBase = getFontBase(currentWidth, fontMapMobile);
  }
  if (!html) {
    console.error('HTML element not found');
    return;
  }
  // 宽度固定 pc端根字体不再自适应
  if (currentWidth < 350) {
    currentWidth = 350
  }
  // else if (validPcOrPhone()) {
  //   currentWidth = 1780
  // }

  const currentFontWidth = (fontBase * currentWidth) / designWidth
  html.style.fontSize = currentFontWidth + 'px'
}
export default autoFont
