import { observable, action } from 'mobx';

const menuTree = {
  main: {
    label: '',
    menus: [
      {
        label: '发现音乐',
        icon: '',
        value: 'findMusic',
        path: '/findMusic',
      },
      {
        label: '私人FM',
        icon: '',
        value: 'privateFM',
        path: '/privateFM',
      },
      {
        label: '视频',
        icon: '',
        value: 'video',
        path: '/video',
      },
      {
        label: '朋友',
        icon: '',
        value: 'friend',
        path: '/friend',
      },
    ],
  },
  myMusic: {
    label: '我的音乐',
    menus: [
      {
        label: 'iTunes',
        icon: '',
        value: 'iTunes',
        path: '/iTunes',
      },
      {
        label: '下载管理',
        icon: '',
        value: 'download',
        path: '/download',
      },
      {
        label: '我的音乐云盘',
        icon: '',
        value: 'cloud',
        path: '/cloud',
      },
      {
        label: '我的收藏',
        icon: '',
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
