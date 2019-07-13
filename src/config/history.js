

import { createMemoryHistory } from 'history';

// 使用memoryHistory可以知道每个路由的index值，就可以判断是否是stack的首尾
export default createMemoryHistory({
  initialEntries: ['/findMusic'], // 默认首页
  initialIndex: 0,
  getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});
