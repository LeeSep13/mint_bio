export function getImageUrl(picPath) {
    try {
        return require(`@/${picPath}`);
    } catch (e) {
        console.error(`Image not found: ${picPath}`, e);
        return ""; // 返回空字符串或其他默认图片路径
    }
}