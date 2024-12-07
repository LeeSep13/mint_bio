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
 * 判断pc端还是移动端
 * @returns true:pc端 false:移动端
 */
export const validPcOrPhone = () => {
  const { currentWidth
  } = getWidth()
  // if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
  //   return false;
  // }
  if (!currentWidth) {
    console.error('HTML element not found');
    return;
  }
  if (currentWidth < 960) {
    return false;
  }
  return true;
}


/**
 * 设置根字体
 */
export const autoFont = () => {
  let fontBase
  let designWidth
  let { currentWidth, html } = getWidth()
  //设计稿宽度为1780 390
  if (validPcOrPhone()) {
    designWidth = 1780
    fontBase = 16
    // 按照比例计算此区间会字体越来越小，所以需要重新设置基础字体大小
    if (currentWidth > 1200 && currentWidth < 1780) {
      fontBase = 24
    } else if (currentWidth > 960 && currentWidth < 1200) {
      fontBase = 32
    }
  } else {
    designWidth = 390
    fontBase = 14
  }
  if (!html) {
    console.error('HTML element not found');
    return;
  }
  const currentFontWidth = (fontBase * currentWidth) / designWidth
  html.style.fontSize = currentFontWidth + 'px'
  console.log('html.style.fontSize', currentWidth, designWidth, html.style.fontSize);
}
export default autoFont
