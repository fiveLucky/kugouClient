

import { createMemoryHistory } from 'history';

// 使用memoryHistory可以知道每个路由的index值，就可以判断是否是stack的首尾
// 不使用window的location了，单独的一套路由，所以 window的location是检测不到变化的
const history = createMemoryHistory({
  initialEntries: ['/findMusic'], // 默认首页
  initialIndex: 0,
  getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});


export default history;
