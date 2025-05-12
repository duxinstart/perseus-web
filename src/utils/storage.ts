// 本地存储工具方法封装
export function setStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage<T = any>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (item) {
    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  }
  return null;
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}

// 新增：兼容老项目的导出
export function initState() {
  // 初始化本地存储状态（根据实际业务实现）
}

export function saveUserData() {
  // 保存用户数据到本地存储（根据实际业务实现）
}

export function getSysStorage(key: string) {
  // 获取系统级本地存储（根据实际业务实现）
  return getStorage(key);
}
