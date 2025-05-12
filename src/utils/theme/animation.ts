// 主题切换动画相关工具函数
export function setThemeTransitionClass(isAdd: boolean) {
  // 添加或移除主题切换过渡类
  const bodyEl = document.body;
  if (isAdd) {
    bodyEl.classList.add('theme-transition');
  } else {
    bodyEl.classList.remove('theme-transition');
  }
}
