document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 400, // 動畫持續時間 (毫秒)
    easing: 'liner', // 動畫緩動效果
    once: false, // 動畫只執行一次
    offset: 30,
  });
});
