
export default {
  main: {
    label: '',
    value: 'default',
    menus: [
      {
        label: '发现音乐',
        icon: 'netease',
        value: 'findMusic',
        path: '/findMusic',
        subMenus: [
          {
            label: '个性推荐',
            icon: null,
            value: 'findMusic',
            path: '/findMusic',
          },
          {
            label: '歌单',
            icon: null,
            value: 'musicList',
            path: '/findMusic/musicList',
          },
          {
            label: '主播电台',
            icon: null,
            value: 'anchorFM',
            path: '/findMusic/anchorFM',
          },
          {
            label: '排行榜',
            icon: null,
            value: 'ranking',
            path: '/findMusic/ranking',
          },
          {
            label: '歌手',
            icon: null,
            value: 'singer',
            path: '/findMusic/singer',
          },
          {
            label: '最新音乐',
            icon: null,
            value: 'latestMusic',
            path: '/findMusic/latestMusic',
          },
        ],
      },
      {
        label: '私人FM',
        icon: 'fm',
        value: 'privateFM',
        path: '/privateFM',
        subMenus: [],
      },
      {
        label: '视频',
        icon: 'video',
        value: 'video',
        path: '/video',
        subMenus: [
          {
            label: '视频',
            icon: null,
            value: 'video',
            path: '/video',
          },
          {
            label: 'MV',
            icon: null,
            value: 'MV',
            path: '/video/MV',
          },
        ],
      },
      {
        label: '朋友',
        icon: 'friend',
        value: 'friend',
        path: '/friend',
        subMenus: [
          {
            label: '动态',
            icon: null,
            value: 'friend',
            path: '/friend',
          },
        ],
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
