import { observable, action } from 'mobx';

const menuTree = {
  main: {
    label: '',
    value: 'default',
    menus: [
      {
        label: '发现音乐',
        icon: 'netease',
        value: 'findMusic',
        path: '/findMusic',
      },
      {
        label: '私人FM',
        icon: 'fm',
        value: 'privateFM',
        path: '/privateFM',
      },
      {
        label: '视频',
        icon: 'video',
        value: 'video',
        path: '/video',
      },
      {
        label: '朋友',
        icon: 'friend',
        value: 'friend',
        path: '/friend',
      },
    ],
  },
  myMusic: {
    label: '我的音乐',
    value: 'mine-music',
    menus: [
      {
        label: 'iTunes',
        icon: 'music',
        value: 'iTunes',
        path: '/iTunes',
      },
      {
        label: '下载管理',
        icon: 'download',
        value: 'download',
        path: '/download',
      },
      {
        label: '我的音乐云盘',
        icon: 'cloud',
        value: 'cloud',
        path: '/cloud',
      },
      {
        label: '我的收藏',
        icon: 'collect',
        value: 'collection',
        path: '/collection',
      },
    ],
  },

};

class Store {
  @observable activedMenuKey = null;

  @observable menuTree = [];


  @action
  setStore(value = {}) {
    Object.assign(this, value);
  }

  onCollapse = (collapsed) => {
    this.setStore({ collapsed });
  }

  fetchMenuTree = () => {
    setTimeout(() => {
      this.setStore({ menuTree });
    }, 500);
  }

  @action.bound
  setState(value = {}) {
    Object.assign(this, value);
  }
}

export default new Store();
